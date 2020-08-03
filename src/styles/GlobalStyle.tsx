import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
  * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
     
   body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${theme.palette.background.default};
  }

`;

export { GlobalStyle };
