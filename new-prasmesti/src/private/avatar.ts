import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { readLocalActor, writeLocalActor } from '../lib/localSession';
import { logActivity } from '../lib/activityLog';
import { signAvatarUrl } from './auth';

export type AvatarResult = { ok: true; url: string } | { ok: false; error: string };

const MAX_SIDE = 256;
const MIME = 'image/jpeg';

/**
 * Recadre la photo en carré et la réduit à 256 px avant tout envoi.
 * Une photo de profil n'est jamais affichée plus grande, et un original de
 * plusieurs mégaoctets saturerait aussi bien le stockage que le quota
 * localStorage utilisé en mode démonstration.
 */
async function toSquareThumbnail(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const side = Math.min(bitmap.width, bitmap.height);
  const sx = (bitmap.width - side) / 2;
  const sy = (bitmap.height - side) / 2;

  const canvas = document.createElement('canvas');
  canvas.width = MAX_SIDE;
  canvas.height = MAX_SIDE;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas indisponible');
  context.drawImage(bitmap, sx, sy, side, side, 0, 0, MAX_SIDE, MAX_SIDE);
  bitmap.close();

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('Conversion impossible'))),
      MIME,
      0.85,
    );
  });
}

const blobToDataUrl = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error('Lecture impossible'));
    reader.readAsDataURL(blob);
  });

export async function uploadAvatar(file: File): Promise<AvatarResult> {
  if (!file.type.startsWith('image/')) {
    return { ok: false, error: 'Le fichier choisi n’est pas une image.' };
  }

  let thumbnail: Blob;
  try {
    thumbnail = await toSquareThumbnail(file);
  } catch {
    return { ok: false, error: "L'image n'a pas pu être préparée." };
  }

  if (isSupabaseConfigured && supabase) {
    const { data: session } = await supabase.auth.getUser();
    if (!session.user) return { ok: false, error: 'Session expirée, reconnectez-vous.' };

    // Le premier segment du chemin porte la règle d'accès du bucket.
    const path = `${session.user.id}/avatar.jpg`;
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, thumbnail, { upsert: true, contentType: MIME });
    if (uploadError) return { ok: false, error: `Envoi refusé : ${uploadError.message}` };

    const { error: profileError } = await supabase
      .from('profiles')
      .update({ avatar_path: path })
      .eq('id', session.user.id);
    if (profileError) return { ok: false, error: `Profil non mis à jour : ${profileError.message}` };

    const url = await signAvatarUrl(path);
    if (!url) return { ok: false, error: "La photo est enregistrée mais n'a pas pu être affichée." };

    await logActivity({ action: 'profile.avatar_updated', entity: 'Photo de profil', status: 'done' });
    return { ok: true, url };
  }

  const actor = readLocalActor();
  if (!actor) return { ok: false, error: 'Session introuvable.' };
  try {
    const dataUrl = await blobToDataUrl(thumbnail);
    writeLocalActor({ ...actor, avatarUrl: dataUrl });
    await logActivity({ action: 'profile.avatar_updated', entity: 'Photo de profil', status: 'done' });
    return { ok: true, url: dataUrl };
  } catch {
    return { ok: false, error: "La photo n'a pas pu être enregistrée localement." };
  }
}
