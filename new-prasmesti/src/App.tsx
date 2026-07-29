import { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import RequirePrivateAuth from './private/RequirePrivateAuth';

// Titre de document par page (onglet, favoris, partage). Une seule source,
// indexée par la route, plutôt qu'un <title> statique unique.
const PAGE_TITLES: Record<string, string> = {
  '/': 'Accueil',
  '/presentation': 'Présentation',
  '/presentation/what': "Qu'est-ce que le PRASMESTI ?",
  '/presentation/why': 'Pourquoi le PRASMESTI ?',
  '/presentation/objectives': 'Objectifs',
  '/presentation/expectations': 'Attentes',
  '/presentation/issues': 'Enjeux',
  '/presentation/design': 'Conception et opérationnalisation',
  '/presentation/leads': 'Responsables',
  '/presentation/implementation': 'État de mise en œuvre',
};

function RouteTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    let sub = PAGE_TITLES[pathname];
    if (!sub && pathname.startsWith('/presentation/implementation/')) sub = 'État de mise en œuvre';
    else if (!sub && pathname.startsWith('/news/')) sub = 'Actualités';
    else if (!sub && pathname.startsWith('/private')) sub = 'Espace privé';
    document.title = sub
      ? `${sub} — PRASMESTI`
      : 'PRASMESTI — Portail régional CEEAC de suivi (Afrique centrale)';
  }, [pathname]);
  return null;
}

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
const NewsDetailPage = lazy(() => import('./pages/news/NewsDetailPage'));
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
      <RouteTitle />
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
          <Route path="/news/:slug" element={<NewsDetailPage />} />
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
