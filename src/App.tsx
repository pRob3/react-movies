import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { claim } from './auth/auth.model';
import AuthenticationContext from './auth/AuthenticationContext';
import Authorized from './auth/Authorized';
import { getClaims } from './auth/handleJWT';
import Login from './auth/Login';
import Menu from './Menu';
import routes from './route-config';
import configureInterceptor from './utils/httpInterceptors';
import configureValidations from './Validations';

configureValidations();
configureInterceptor();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === 'role' && claim.value === 'admin'
      ) > -1
    );
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Authorized
          authorized={
            <>
              <Menu />
              <div className='container'>
                <Switch>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                    >
                      {route.isAdmin && !isAdmin() ? (
                        <>You are not allowed to see this page</>
                      ) : (
                        <route.component />
                      )}
                    </Route>
                  ))}
                </Switch>
              </div>
              <footer className='bd-footer py-5 mt-5 bg-light'>
                <div className='container'>
                  React Movies {new Date().getFullYear().toString()}
                </div>
              </footer>
            </>
          }
          notAuthorized={
            <>
              <Login />
            </>
          }
        />
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
