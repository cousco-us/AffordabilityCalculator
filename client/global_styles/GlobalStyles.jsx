import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    background-color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  div {
    display: block;
  }

  .main-content {
    background-color: rgb(255, 255, 255);
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .page-layout {
    max-width: 960px;
    margin: auto;
    padding: 16px 16px;
  }

  // GLOBAL FONT STYLES //

  h3 {
    font-weight: 600;
    font-size: 1.2em;
    line-height: 1.2;
  }

  h4 {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5;
  }

  p {
    font-size: 1em;
    line-height: 1.5;
  }

  // AFFORDABILITY MODULE //

  .affordability-container {
    margin: 32px 0px;
    display: flex;
    flex-direction: column;
  }

  // HEADING COMPONENT //

  .heading-container {
    padding: 0px 0px 8px;
  }

  .text-container {
    padding: 0px 0px 16px;
  }

  .text-container-base {
    color: rgb(59, 65, 68);
  }

  .heading-container p {
    margin-top: -16px;
  }
`;

export default GlobalStyles;
