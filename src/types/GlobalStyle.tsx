import { createGlobalStyle, css } from 'styled-components';

import reset from 'styled-reset';

const font = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${font}

  body {
    font-family: 'Pretendard-Regular', 'Arial Narrow', Arial, sans-serif;
  }
`;

export default GlobalStyle;
