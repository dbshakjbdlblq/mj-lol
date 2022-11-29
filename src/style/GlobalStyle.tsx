import { css, Global } from '@emotion/react';

const style = css`
  html,
  span,
  a {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #faf9f9;
  }

  a {
    text-decoration: none;
    color: black;
  }

  p {
    margin: 0;
  }

  input {
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
