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
import { useMemo, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { usePrivateAuth } from './PrivateAuthContext';
import { uploadAvatar } from './avatar';
import { usePrivateI18n, type PVKey } from './privateI18n';
import PrivateLangToggle from './PrivateLangToggle';

// Monogramme d'initiales dérivé du nom (évite une photo unique codée en dur pour tous).
const initialsOf = (name: string): string =>
  name
    .replace(/[—–-]/g, ' ')
    .split(/\s+/)
    .filter((w) => /[A-Za-zÀ-ÿ]/.test(w.charAt(0)))
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('') || 'PR';

type NavItem = { to: string; labelKey: PVKey; icon: typeof LayoutGrid; adminOnly?: boolean };

const navigation: NavItem[] = [
  { to: '/private/dashboard', labelKey: 'navDashboard', icon: LayoutGrid },
  { to: '/private/questionnaire', labelKey: 'navQuestionnaire', icon: ClipboardList },
  { to: '/private/statistiques', labelKey: 'navStatistics', icon: BarChart3 },
  // Le journal d'activité couvre tous les comptes : il ne regarde que l'admin.
  { to: '/private/historique', labelKey: 'navHistory', icon: History, adminOnly: true },
];

function PrivateLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [avatarError, setAvatarError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, signOut, refresh } = usePrivateAuth();
  const { t } = usePrivateI18n();

  const visibleNavigation = useMemo(
    () => navigation.filter((item) => !item.adminOnly || isAdmin),
    [isAdmin],
  );

  const pageTitleKey = useMemo<PVKey>(() => {
    const match = navigation.find((item) => location.pathname.startsWith(item.to));
    return match?.labelKey ?? 'privateFallbackTitle';
  }, [location.pathname]);

  const handleAvatarChange = async (file: File | undefined) => {
    if (!file) return;
    setAvatarError('');
    const result = await uploadAvatar(file);
    if (result.ok) await refresh();
    else setAvatarError(result.error);
  };

  if (!user) return null;

  return (
    <div className={`private-shell${isSidebarCollapsed ? ' is-sidebar-collapsed' : ''}`}>
      <aside
        className={`private-sidebar${isSidebarOpen ? ' is-open' : ''}${isSidebarCollapsed ? ' is-collapsed' : ''}`}
      >
        <div className="private-sidebar-head">
          <Link to="/private/dashboard" className="private-brand">
            <img src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/logo.png`} alt="PRASMESTI" className="private-brand-mark" />
            <div className="private-sidebar-copy">
              <p className="private-brand-kicker">{t('privateSpace')}</p>
              <p className="private-brand-name">PRASMESTI</p>
            </div>
          </Link>
        </div>

        <nav className="private-nav">
          {visibleNavigation.map(({ to, labelKey, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `private-nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <Icon size={18} />
              <span className="private-sidebar-copy">{t(labelKey)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="private-sidebar-foot">
          <Link to="/" className="private-return-link">
            <span className="private-sidebar-copy">{t('returnPublic')}</span>
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
              aria-label={t('openMenu')}
            >
              <Menu size={18} />
            </button>

            <button
              type="button"
              className="private-collapse-button"
              onClick={() => setIsSidebarCollapsed((current) => !current)}
              aria-label={isSidebarCollapsed ? t('expandSidebar') : t('collapseSidebar')}
              title={isSidebarCollapsed ? t('expandSidebar') : t('collapseSidebar')}
              aria-pressed={isSidebarCollapsed}
            >
              {isSidebarCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>

            <div>
              <p className="private-topbar-label">{t('adminSecure')}</p>
              <h1 className="private-topbar-title">{t(pageTitleKey)}</h1>
            </div>
          </div>

          <div className="private-topbar-actions">
            <div className="private-topbar-chip">
              <ShieldCheck size={16} />
              <span>{t('sessionActive')}</span>
            </div>

            <button type="button" className="private-icon-button" aria-label={t('notifications')}>
              <Bell size={18} />
              <span className="private-notification-dot" />
            </button>

            <PrivateLangToggle />

            <div className="private-user-card">
              <button
                type="button"
                className="private-user-avatar-button"
                onClick={() => fileInputRef.current?.click()}
                title={t('avatarChange')}
                aria-label={t('avatarChange')}
              >
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt="" className="private-user-avatar" />
                ) : (
                  <span className="private-user-avatar private-user-avatar-initials" aria-hidden="true">
                    {initialsOf(user.name)}
                  </span>
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="private-visually-hidden"
                onChange={(event) => {
                  void handleAvatarChange(event.target.files?.[0]);
                  event.target.value = '';
                }}
              />
              <div className="private-user-copy">
                <p className="private-user-name">{user.name}</p>
                <p className="private-user-email">{avatarError || user.email}</p>
              </div>
            </div>

            <button
              type="button"
              className="private-logout-button"
              onClick={() => {
                void signOut().then(() => navigate('/private/login', { replace: true }));
              }}
            >
              <LogOut size={16} />
              <span>{t('logout')}</span>
            </button>
          </div>
        </header>

        <main id="main" className="private-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PrivateLayout;
