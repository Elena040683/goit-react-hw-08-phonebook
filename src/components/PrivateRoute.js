import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelector } from '../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
