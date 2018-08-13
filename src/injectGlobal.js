import { injectGlobal } from "styled-components";

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  #root {
    height: 100%;
    width: 100%;
    max-width: 1820px;
    margin: 0 auto;
    overflow: auto;
  }
`;
