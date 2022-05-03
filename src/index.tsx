import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './store/store';
import './index.scss';

ReactDOM.render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,

  document.getElementById('root'),
);
