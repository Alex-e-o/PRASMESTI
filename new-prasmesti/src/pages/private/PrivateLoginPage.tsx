import { ArrowLeft, LockKeyhole, User } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isPrivateAuthenticated, loginPrivate } from '../../private/auth';

function PrivateLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('Prasmesti@2026');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
          <p className="private-login-kicker">PRASMESTI Admin</p>
          <h1 className="private-login-title">Connectez-vous à l'espace privé</h1>
          <p className="private-login-body">
            Migration React du tableau de bord interne, avec une interface plus claire, plus stable et adaptée au suivi des données.
          </p>

          <div className="private-login-note">
            <p className="private-login-note-title">Comptes de démonstration</p>
            <p className="private-login-note-body">
              Admin : <strong>admin</strong> — Pays : <strong>gabon</strong>, <strong>cameroun</strong>, <strong>rdc</strong>, <strong>tchad</strong>… (un par État membre)
            </p>
            <p className="private-login-note-body">Mot de passe commun : <strong>Prasmesti@2026</strong></p>
          </div>
        </div>

        <form className="private-login-form" onSubmit={handleSubmit}>
          <div className="private-login-brand">
            <img src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/logo.png`} alt="PRASMESTI" className="private-login-brand-mark" />
            <div>
              <p className="private-login-brand-title">PRASMESTI</p>
              <p className="private-login-brand-subtitle">Espace de pilotage et de reporting</p>
            </div>
          </div>

          {error ? <div className="private-login-error">{error}</div> : null}

          <label className="private-field">
            <span className="private-field-label">Identifiant</span>
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
            <span className="private-field-label">Mot de passe</span>
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
            {submitting ? 'Connexion…' : 'Se connecter'}
          </button>

          <Link to="/" className="private-login-back">
            <ArrowLeft size={16} />
            <span>Retour a l'accueil</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PrivateLoginPage;
