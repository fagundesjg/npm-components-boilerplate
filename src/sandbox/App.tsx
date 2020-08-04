import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core';

import { Routes } from 'sandbox/routes';
import { theme, GlobalStyle } from 'styles';
import { AppBarProvider } from 'contexts';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppBarProvider>
          <GlobalStyle />
          <Routes />
        </AppBarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
