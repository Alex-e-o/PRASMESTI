import { ArrowLeft, LockKeyhole, User } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isPrivateAuthenticated, loginPrivate } from '../../private/auth';

function PrivateLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isPrivateAuthenticated()) {
      navigate('/private/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loginPrivate(username, password);

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
          <h1 className="private-login-title">Connectez-vous a l'espace prive</h1>
          <p className="private-login-body">
            Migration React du tableau de bord interne, avec une interface plus claire, plus stable et adaptee au suivi des donnees.
          </p>

          <div className="private-login-note">
            <p className="private-login-note-title">Compte de demonstration</p>
            <p className="private-login-note-body">Identifiant: `admin` | Mot de passe: `admin`</p>
          </div>
        </div>

        <form className="private-login-form" onSubmit={handleSubmit}>
          <div className="private-login-brand">
            <img src="/assets/prasmesti/shared/logo.png" alt="PRASMESTI" className="private-login-brand-mark" />
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
              <input value={username} onChange={(event) => setUsername(event.target.value)} />
            </span>
          </label>

          <label className="private-field">
            <span className="private-field-label">Mot de passe</span>
            <span className="private-field-input-wrap">
              <LockKeyhole size={18} />
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </span>
          </label>

          <button type="submit" className="private-login-submit">
            Se connecter
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
