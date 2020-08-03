import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core';

import { Routes } from 'sandbox/routes';
import { theme, GlobalStyle } from 'styles';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
