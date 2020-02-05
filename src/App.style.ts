import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: auto;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background-color: ${theme.colours.zircon};
    color: ${theme.colours.oxfordBlue};
    font: normal normal ${theme.fontWeight.regular} ${theme.fontSize.default}px/1.2 ${theme.font.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${theme.colours.oxfordBlue};
    color: ${theme.colours.white};
  }

  ::-moz-selection {
    background-color: ${theme.colours.oxfordBlue};
    color: ${theme.colours.white};
  }
`