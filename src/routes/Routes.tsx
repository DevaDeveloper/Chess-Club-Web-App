import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { pathComponentArray } from './RouteComponentMap';
import { ProtectedRoute } from './ProtectedRoute';
import Navbar from '../components/navbar/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      {pathComponentArray.map((pc) => (
        <ProtectedRoute
          key={uuid()}
          path={pc.path}
          exact
          component={pc.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
