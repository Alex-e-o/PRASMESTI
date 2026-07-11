import { ArrowLeft, LockKeyhole, User } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isPrivateAuthenticated, loginPrivate } from '../../private/auth';
import { usePrivateI18n } from '../../private/privateI18n';

function PrivateLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('Prasmesti@2026');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = usePrivateI18n();

  useEffect(() => {
    if (isPrivateAuthenticated()) {
      navigate('/private/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    const result = await loginPrivate(username, password);
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    const next = (location.state as { from?: string } | null)?.from ?? '/private/dashboard';
    navigate(next, { replace: true });
  };

  return (
    <div className="private-login-page">
      <div className="private-login-panel">
        <div className="private-login-copy">
          <p className="private-login-kicker">{t('loginAdmin')}</p>
          <h1 className="private-login-title">{t('loginTitle')}</h1>
          <p className="private-login-body">{t('loginBody')}</p>

          <div className="private-login-note">
            <p className="private-login-note-title">{t('loginDemoTitle')}</p>
            <p className="private-login-note-body">{t('loginDemoAccounts')}</p>
            <p className="private-login-note-body">
              {t('loginDemoPassword')} : <strong>Prasmesti@2026</strong>
            </p>
          </div>
        </div>

        <form className="private-login-form" onSubmit={handleSubmit}>
          <div className="private-login-brand">
            <img src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/logo.png`} alt="PRASMESTI" className="private-login-brand-mark" />
            <div>
              <p className="private-login-brand-title">PRASMESTI</p>
              <p className="private-login-brand-subtitle">{t('loginBrandSubtitle')}</p>
            </div>
          </div>

          {error ? <div className="private-login-error">{error}</div> : null}

          <label className="private-field">
            <span className="private-field-label">{t('loginIdentifier')}</span>
            <span className="private-field-input-wrap">
              <User size={18} />
              <input
                type="text"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </span>
          </label>

          <label className="private-field">
            <span className="private-field-label">{t('loginPassword')}</span>
            <span className="private-field-input-wrap">
              <LockKeyhole size={18} />
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </span>
          </label>

          <button type="submit" className="private-login-submit" disabled={submitting}>
            {submitting ? t('loginConnecting') : t('loginConnect')}
          </button>

          <Link to="/" className="private-login-back">
            <ArrowLeft size={16} />
            <span>{t('loginBack')}</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PrivateLoginPage;
