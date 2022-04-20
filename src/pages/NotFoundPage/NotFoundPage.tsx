import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../Page';

const NotFoundPage = () => (
  <Page>
    <p>
      This is not the page that you are looking for!
      <br />
      <NavLink to="/">Go Home</NavLink>
    </p>
  </Page>
);

export default NotFoundPage;
