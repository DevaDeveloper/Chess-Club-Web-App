import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Routes from './routes/Routes';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
