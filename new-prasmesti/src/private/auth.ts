export type PrivateUser = {
  name: string;
  email: string;
};

const AUTH_KEY = 'prasmesti-private-auth';
const USER_KEY = 'prasmesti-private-user';

const defaultUser: PrivateUser = {
  name: 'David Blaise OSSENE',
  email: 'blaise.ossene@prasmesti.co',
};

export function isPrivateAuthenticated() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

export function getPrivateUser(): PrivateUser {
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return defaultUser;

  try {
    return JSON.parse(raw) as PrivateUser;
  } catch {
    return defaultUser;
  }
}

export function loginPrivate(username: string, password: string) {
  if (username !== 'admin' || password !== 'admin') {
    return { ok: false as const, error: 'Identifiants incorrects.' };
  }

  window.localStorage.setItem(AUTH_KEY, 'true');
  window.localStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
  return { ok: true as const };
}

export function logoutPrivate() {
  window.localStorage.removeItem(AUTH_KEY);
  window.localStorage.removeItem(USER_KEY);
}
