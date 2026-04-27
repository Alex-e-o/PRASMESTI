import {
  Bell,
  ClipboardList,
  BarChart3,
  History,
  LayoutGrid,
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AnimatedThemeToggle from '../components/AnimatedThemeToggle';
import { getPrivateUser, logoutPrivate } from './auth';

const navigation = [
  { to: '/private/dashboard', label: 'Tableau de bord', icon: LayoutGrid },
  { to: '/private/questionnaire', label: 'Questionnaire', icon: ClipboardList },
  { to: '/private/statistiques', label: 'Statistiques', icon: BarChart3 },
  { to: '/private/historique', label: 'Historique', icon: History },
];

function PrivateLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useMemo(() => getPrivateUser(), []);

  const pageTitle = useMemo(() => {
    const match = navigation.find((item) => location.pathname.startsWith(item.to));
    return match?.label ?? 'PRASMESTI Prive';
  }, [location.pathname]);

  return (
    <div className={`private-shell${isSidebarCollapsed ? ' is-sidebar-collapsed' : ''}`}>
      <aside
        className={`private-sidebar${isSidebarOpen ? ' is-open' : ''}${isSidebarCollapsed ? ' is-collapsed' : ''}`}
      >
        <div className="private-sidebar-head">
          <Link to="/private/dashboard" className="private-brand">
            <img src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/logo.png`} alt="PRASMESTI" className="private-brand-mark" />
            <div className="private-sidebar-copy">
              <p className="private-brand-kicker">Espace prive</p>
              <p className="private-brand-name">PRASMESTI</p>
            </div>
          </Link>
        </div>

        <nav className="private-nav">
          {navigation.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `private-nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <Icon size={18} />
              <span className="private-sidebar-copy">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="private-sidebar-foot">
          <Link to="/" className="private-return-link">
            <span className="private-sidebar-copy">Retour au site public</span>
          </Link>
        </div>
      </aside>

      <div className="private-main-shell">
        <header className="private-topbar">
          <div className="private-topbar-main">
            <button
              type="button"
              className="private-menu-button"
              onClick={() => setIsSidebarOpen((current) => !current)}
              aria-label="Ouvrir le menu prive"
            >
              <Menu size={18} />
            </button>

            <button
              type="button"
              className="private-collapse-button"
              onClick={() => setIsSidebarCollapsed((current) => !current)}
              aria-label={isSidebarCollapsed ? 'Deployer le menu lateral' : 'Retracter le menu lateral'}
              aria-pressed={isSidebarCollapsed}
            >
              {isSidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
              <span>{isSidebarCollapsed ? 'Deployer le menu' : 'Retracter le menu'}</span>
            </button>

            <div>
              <p className="private-topbar-label">Administration securisee</p>
              <h1 className="private-topbar-title">{pageTitle}</h1>
            </div>
          </div>

          <div className="private-topbar-actions">
            <div className="private-topbar-chip">
              <ShieldCheck size={16} />
              <span>Session active</span>
            </div>

            <button type="button" className="private-icon-button" aria-label="Notifications">
              <Bell size={18} />
              <span className="private-notification-dot" />
            </button>

            <AnimatedThemeToggle />

            <div className="private-user-card">
              <img
                src={`${import.meta.env.BASE_URL}assets/prasmesti/private/blaise-ossene.jpg`}
                alt={user.name}
                className="private-user-avatar"
              />
              <div className="private-user-copy">
                <p className="private-user-name">{user.name}</p>
                <p className="private-user-email">{user.email}</p>
              </div>
            </div>

            <button
              type="button"
              className="private-logout-button"
              onClick={() => {
                logoutPrivate();
                navigate('/private/login', { replace: true });
              }}
            >
              <LogOut size={16} />
              <span>Deconnexion</span>
            </button>
          </div>
        </header>

        <main className="private-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PrivateLayout;
