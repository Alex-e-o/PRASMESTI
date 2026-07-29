// Session de l'espace privé côté navigateur.
//
// Module volontairement minuscule et sans dépendance : il est importé à la fois
// par la couche d'authentification et par le journal d'activité, qui ne doivent
// pas s'importer l'un l'autre.

export type LocalRole = 'admin' | 'country';

export type LocalActor = {
  name: string;
  email: string;
  role: LocalRole;
  countrySlug?: string;
  avatarUrl?: string;
};

const ACTOR_KEY = 'prasmesti-private-user';

export function readLocalActor(): LocalActor | null {
  try {
    const raw = window.localStorage.getItem(ACTOR_KEY);
    return raw ? (JSON.parse(raw) as LocalActor) : null;
  } catch {
    return null;
  }
}

export function writeLocalActor(actor: LocalActor): void {
  try {
    window.localStorage.setItem(ACTOR_KEY, JSON.stringify(actor));
  } catch {
    /* stockage indisponible : la session ne survivra pas au rechargement */
  }
}

export function clearLocalActor(): void {
  try {
    window.localStorage.removeItem(ACTOR_KEY);
    // Vestige de la version précédente : un simple drapeau « true » suffisait à
    // entrer dans l'espace privé. On le purge pour qu'aucune session ne subsiste.
    window.localStorage.removeItem('prasmesti-private-auth');
  } catch {
    /* rien à nettoyer */
  }
}
