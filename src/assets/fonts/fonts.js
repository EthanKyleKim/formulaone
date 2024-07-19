import { createGlobalStyle } from 'styled-components';
import Formula1BlackTTF from './Formula1-Black.ttf';
import Formula1BoldTTF from './Formula1-Bold.ttf';
import Formula1RegularTTF from './Formula1-Regular.ttf';
import Formula1WideTTF from './Formula1-Wide.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Formula1';
    src: url(${Formula1RegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formula1';
    src: url(${Formula1BoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formula1';
    src: url(${Formula1BlackTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Formula1';
    src: url(${Formula1WideTTF}) format('truetype');
    font-weight: normal;
    font-stretch: expanded;
  }

  body {
    font-family: 'Formula1', sans-serif;
  }
`;
