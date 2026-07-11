import { lazy, Suspense } from 'react';
import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import RequirePrivateAuth from './private/RequirePrivateAuth';

// Code-splitting : chaque page est chargée à la demande (bundle initial allégé).
const HomePage = lazy(() => import('./pages/HomePage'));
const PresentationPage = lazy(() => import('./pages/PresentationPage'));
const PresentationDetailPage = lazy(() => import('./pages/presentation/PresentationDetailPage'));
const WhyPage = lazy(() => import('./pages/presentation/WhyPage'));
const ObjectifsPage = lazy(() => import('./pages/presentation/ObjectifsPage'));
const AttentesPage = lazy(() => import('./pages/presentation/AttentesPage'));
const EnjeuxPage = lazy(() => import('./pages/presentation/EnjeuxPage'));
const ConceptionPage = lazy(() => import('./pages/presentation/ConceptionPage'));
const ResponsablesPage = lazy(() => import('./pages/presentation/ResponsablesPage'));
const ImplementationStatusPage = lazy(() => import('./pages/presentation/ImplementationStatusPage'));
const ImplementationGabonPage = lazy(() => import('./pages/presentation/ImplementationGabonPage'));
const ImplementationCountryPage = lazy(() => import('./pages/presentation/ImplementationCountryPage'));
const PrivateLayout = lazy(() => import('./private/PrivateLayout'));
const PrivateLoginPage = lazy(() => import('./pages/private/PrivateLoginPage'));
const PrivateDashboardPage = lazy(() => import('./pages/private/PrivateDashboardPage'));
const PrivateIndicatorPage = lazy(() => import('./pages/private/PrivateIndicatorPage'));
const PrivateQuestionnairePage = lazy(() => import('./pages/private/PrivateQuestionnairePage'));
const PrivateStatisticsPage = lazy(() => import('./pages/private/PrivateStatisticsPage'));
const PrivateHistoryPage = lazy(() => import('./pages/private/PrivateHistoryPage'));

function App() {
  return (
    <Router>
      <a href="#main" className="skip-link">Aller au contenu</a>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/presentation/what" element={<PresentationDetailPage />} />
          <Route path="/presentation/why" element={<WhyPage />} />
          <Route path="/presentation/objectives" element={<ObjectifsPage />} />
          <Route path="/presentation/expectations" element={<AttentesPage />} />
          <Route path="/presentation/issues" element={<EnjeuxPage />} />
          <Route path="/presentation/design" element={<ConceptionPage />} />
          <Route path="/presentation/leads" element={<ResponsablesPage />} />
          <Route path="/presentation/implementation" element={<ImplementationStatusPage />} />
          <Route path="/presentation/implementation/gabon" element={<ImplementationGabonPage />} />
          <Route path="/presentation/implementation/:slug" element={<ImplementationCountryPage />} />
          <Route path="/private/login" element={<PrivateLoginPage />} />
          <Route element={<RequirePrivateAuth />}>
            <Route path="/private" element={<PrivateLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<PrivateDashboardPage />} />
              <Route path="indicateur/:slug" element={<PrivateIndicatorPage />} />
              <Route path="questionnaire" element={<PrivateQuestionnairePage />} />
              <Route path="statistiques" element={<PrivateStatisticsPage />} />
              <Route path="historique" element={<PrivateHistoryPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
