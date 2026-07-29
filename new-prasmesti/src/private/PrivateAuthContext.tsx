import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { loadPrivateUser, signInPrivate, signOutPrivate, type LoginResult, type PrivateUser } from './auth';

type AuthStatus = 'loading' | 'authenticated' | 'anonymous';

type PrivateAuthValue = {
  status: AuthStatus;
  user: PrivateUser | null;
  isAdmin: boolean;
  signIn: (identifier: string, password: string) => Promise<LoginResult>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
};

const PrivateAuthContext = createContext<PrivateAuthValue | null>(null);

export function PrivateAuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const [user, setUser] = useState<PrivateUser | null>(null);

  const refresh = useCallback(async () => {
    const next = await loadPrivateUser();
    setUser(next);
    setStatus(next ? 'authenticated' : 'anonymous');
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // Une session Supabase peut expirer ou être révoquée pendant la navigation :
  // sans cette écoute, l'interface continuerait d'afficher un utilisateur connecté.
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    const { data } = supabase.auth.onAuthStateChange(() => {
      // Le rappel ne doit pas appeler l'API Supabase de façon synchrone.
      window.setTimeout(() => void refresh(), 0);
    });
    return () => data.subscription.unsubscribe();
  }, [refresh]);

  const value = useMemo<PrivateAuthValue>(
    () => ({
      status,
      user,
      isAdmin: user?.role === 'admin',
      signIn: async (identifier, password) => {
        const result = await signInPrivate(identifier, password);
        if (result.ok) await refresh();
        return result;
      },
      signOut: async () => {
        await signOutPrivate();
        setUser(null);
        setStatus('anonymous');
      },
      refresh,
    }),
    [status, user, refresh],
  );

  return <PrivateAuthContext.Provider value={value}>{children}</PrivateAuthContext.Provider>;
}

export function usePrivateAuth(): PrivateAuthValue {
  const value = useContext(PrivateAuthContext);
  if (!value) {
    throw new Error("usePrivateAuth doit être utilisé à l'intérieur de PrivateAuthProvider.");
  }
  return value;
}
