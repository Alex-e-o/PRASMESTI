import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { usePrivateAuth } from './PrivateAuthContext';

/** Écran d'attente le temps que la session soit vérifiée auprès de Supabase. */
function SessionPending() {
  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <p className="private-section-body">Vérification de la session…</p>
      </section>
    </div>
  );
}

/** Barrière d'entrée de l'espace privé. */
export function RequirePrivateAuth() {
  const { status } = usePrivateAuth();
  const location = useLocation();

  if (status === 'loading') return <SessionPending />;
  if (status === 'anonymous') {
    return <Navigate to="/private/login" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}

/**
 * Barrière supplémentaire pour les pages réservées à l'administration.
 * Le lien correspondant est déjà masqué dans le menu, mais l'URL reste
 * saisissable à la main : la garde est donc nécessaire, et la RLS Supabase
 * refuse de toute façon les données côté serveur.
 */
export function RequireAdmin() {
  const { status, isAdmin } = usePrivateAuth();

  if (status === 'loading') return <SessionPending />;
  if (!isAdmin) return <Navigate to="/private/dashboard" replace />;
  return <Outlet />;
}
