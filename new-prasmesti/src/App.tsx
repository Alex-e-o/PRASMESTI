import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import PresentationDetailPage from './pages/presentation/PresentationDetailPage';
import WhyPage from './pages/presentation/WhyPage';
import ObjectifsPage from './pages/presentation/ObjectifsPage';
import AttentesPage from './pages/presentation/AttentesPage';
import EnjeuxPage from './pages/presentation/EnjeuxPage';
import ConceptionPage from './pages/presentation/ConceptionPage';
import ResponsablesPage from './pages/presentation/ResponsablesPage';
import ImplementationStatusPage from './pages/presentation/ImplementationStatusPage';
import ImplementationGabonPage from './pages/presentation/ImplementationGabonPage';
import RequirePrivateAuth from './private/RequirePrivateAuth';
import PrivateLayout from './private/PrivateLayout';
import PrivateLoginPage from './pages/private/PrivateLoginPage';
import PrivateDashboardPage from './pages/private/PrivateDashboardPage';
import PrivateQuestionnairePage from './pages/private/PrivateQuestionnairePage';
import PrivateStatisticsPage from './pages/private/PrivateStatisticsPage';
import PrivateHistoryPage from './pages/private/PrivateHistoryPage';

function App() {
  return (
    <Router>
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
        <Route path="/private/login" element={<PrivateLoginPage />} />
        <Route element={<RequirePrivateAuth />}>
          <Route path="/private" element={<PrivateLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PrivateDashboardPage />} />
            <Route path="questionnaire" element={<PrivateQuestionnairePage />} />
            <Route path="statistiques" element={<PrivateStatisticsPage />} />
            <Route path="historique" element={<PrivateHistoryPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
