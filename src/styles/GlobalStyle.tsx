import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';
import font from './font';
import markdown from './markdown';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${font}
  ${markdown}

  body {
    font-family: 'Pretendard', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.fontPrimary};
  }
`;

export default GlobalStyle;
