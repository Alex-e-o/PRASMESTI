// "Annuaire" des comptes de l'espace privé : 1 admin + 1 par État membre.
// Committé dans le repo → présent sur n'importe quel poste après un pull.
// Sert à la fois :
//  - au fallback local (démo sans Supabase) : connexion par username + demoPassword
//  - au seed Supabase (création des utilisateurs auth + table profiles)

export type PrivateRole = 'admin' | 'country';

export type PrivateProfile = {
  /** Identifiant court de connexion (fallback local). */
  username: string;
  /** Email de connexion Supabase. */
  email: string;
  /** Mot de passe de démonstration (fallback local + seed Supabase). */
  demoPassword: string;
  /** Nom affiché. */
  name: string;
  role: PrivateRole;
  /** Slug du pays pour les comptes "country" (correspond aux slugs d'implementationCountries + gabon). */
  countrySlug?: string;
};

const DEMO_PASSWORD = 'Prasmesti@2026';
const EMAIL_DOMAIN = 'prasmesti.ceeac-eccas.org';

const country = (username: string, countrySlug: string, name: string): PrivateProfile => ({
  username,
  email: `${username}@${EMAIL_DOMAIN}`,
  demoPassword: DEMO_PASSWORD,
  name,
  role: 'country',
  countrySlug,
});

export const privateProfiles: PrivateProfile[] = [
  {
    username: 'admin',
    email: `admin@${EMAIL_DOMAIN}`,
    demoPassword: DEMO_PASSWORD,
    name: 'Administrateur PRASMESTI',
    role: 'admin',
  },
  country('gabon', 'gabon', 'Point focal — Gabon'),
  country('angola', 'angola', 'Point focal — Angola'),
  country('burundi', 'burundi', 'Point focal — Burundi'),
  country('cameroun', 'cameroon', 'Point focal — Cameroun'),
  country('centrafrique', 'central-african-republic', 'Point focal — Centrafrique'),
  country('congo', 'congo', 'Point focal — République du Congo'),
  country('guinee-equatoriale', 'equatorial-guinea', 'Point focal — Guinée Équatoriale'),
  country('rdc', 'drc', 'Point focal — République Démocratique du Congo'),
  country('rwanda', 'rwanda', 'Point focal — Rwanda'),
  country('sao-tome', 'sao-tome', 'Point focal — Sao Tomé-et-Principe'),
  country('tchad', 'chad', 'Point focal — Tchad'),
];

export const findProfileByLogin = (identifier: string): PrivateProfile | undefined => {
  const id = identifier.trim().toLowerCase();
  return privateProfiles.find(
    (p) => p.username.toLowerCase() === id || p.email.toLowerCase() === id,
  );
};

export const findProfileByEmail = (email: string): PrivateProfile | undefined => {
  const e = email.trim().toLowerCase();
  return privateProfiles.find((p) => p.email.toLowerCase() === e);
};
