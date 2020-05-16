import { createGlobalStyle } from 'styled-components';

export const GlobalStyleAllPage = createGlobalStyle`
  body {
    margin: 0;
  }
  svg {
    fill: currentColor;
  }
  .linear-status {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1204;
  }
`;
