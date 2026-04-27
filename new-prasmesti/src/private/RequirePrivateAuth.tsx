import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isPrivateAuthenticated } from './auth';

function RequirePrivateAuth() {
  const location = useLocation();

  if (!isPrivateAuthenticated()) {
    return <Navigate to="/private/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default RequirePrivateAuth;
