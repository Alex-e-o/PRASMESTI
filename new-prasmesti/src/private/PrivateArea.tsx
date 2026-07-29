import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateAuthProvider } from './PrivateAuthContext';
import { RequireAdmin, RequirePrivateAuth } from './guards';

// Tout l'espace privé (client Supabase compris) vit derrière ce point d'entrée
// unique et différé : un visiteur du site public ne télécharge rien de tout ceci.
const PrivateLayout = lazy(() => import('./PrivateLayout'));
const PrivateLoginPage = lazy(() => import('../pages/private/PrivateLoginPage'));
const PrivateDashboardPage = lazy(() => import('../pages/private/PrivateDashboardPage'));
const PrivateCountryPage = lazy(() => import('../pages/private/PrivateCountryPage'));
const PrivateQuestionnairePage = lazy(() => import('../pages/private/PrivateQuestionnairePage'));
const PrivateStatisticsPage = lazy(() => import('../pages/private/PrivateStatisticsPage'));
const PrivateHistoryPage = lazy(() => import('../pages/private/PrivateHistoryPage'));

function PrivateArea() {
  return (
    <PrivateAuthProvider>
      <Routes>
        <Route path="login" element={<PrivateLoginPage />} />
        <Route element={<RequirePrivateAuth />}>
          <Route element={<PrivateLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PrivateDashboardPage />} />
            <Route path="pays/:slug" element={<PrivateCountryPage />} />
            <Route path="questionnaire" element={<PrivateQuestionnairePage />} />
            <Route path="statistiques" element={<PrivateStatisticsPage />} />
            <Route element={<RequireAdmin />}>
              <Route path="historique" element={<PrivateHistoryPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </PrivateAuthProvider>
  );
}

export default PrivateArea;
