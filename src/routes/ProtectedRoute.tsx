import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  path: string;
  exact: boolean;
  component: FC;
}

const authenticationService = {
  currentUserValue: true,
  roles: ['ADMIN'],
};
// TODO Implement case-specific logic
export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  path,
  exact,
  component: Component,
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => {
      const currentUser = authenticationService.currentUserValue;
      if (currentUser) {
        return <Component />;
      }
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }

      // authorised so return component
      return <Component />;
    }}
  />
);

export default ProtectedRoute;
