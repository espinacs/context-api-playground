import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          (
            isAuth ?
              <Component {...props} /> :
              <Redirect to={{
                pathname: '/',
                state: { from: props.location },
              }}
              />
          )
        }
        {...rest}
      />
    )}
  </AuthContext.Consumer>
);

export default ProtectedRoute;
