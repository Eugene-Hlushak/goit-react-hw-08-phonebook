import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    height: '500px';
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: '#e6c6bbc5';
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

`;
export const MainContainer = styled.div`
  padding: 20px;
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  /* margin-bottom: 10px; */
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
