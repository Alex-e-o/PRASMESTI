import { ArrowLeft, LockKeyhole, User } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isSupabaseConfigured } from '../../lib/supabase';
import { usePrivateAuth } from '../../private/PrivateAuthContext';
import { usePrivateI18n } from '../../private/privateI18n';

function PrivateLoginPage() {
  // Le pré-remplissage n'a de sens qu'en démonstration ; dès qu'un backend réel
  // est branché, les champs partent vides.
  const [username, setUsername] = useState(isSupabaseConfigured ? '' : 'admin');
  const [password, setPassword] = useState(isSupabaseConfigured ? '' : 'Prasmesti@2026');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = usePrivateI18n();
  const { status, signIn } = usePrivateAuth();

  useEffect(() => {
    if (status === 'authenticated') {
      navigate('/private/dashboard', { replace: true });
    }
  }, [status, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    const result = await signIn(username, password);
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

          {/* Identifiants de démonstration : masqués dès que les comptes réels
              existent, pour ne pas publier un mot de passe sur une page ouverte. */}
          {!isSupabaseConfigured && (
            <div className="private-login-note">
              <p className="private-login-note-title">{t('loginDemoTitle')}</p>
              <p className="private-login-note-body">{t('loginDemoAccounts')}</p>
              <p className="private-login-note-body">
                {t('loginDemoPassword')} : <strong>Prasmesti@2026</strong>
              </p>
            </div>
          )}
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
