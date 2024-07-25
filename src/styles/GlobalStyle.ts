// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components'
import { Colors } from './Colors'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: ${Colors.backgroundColor};
  }
`

export default GlobalStyle
