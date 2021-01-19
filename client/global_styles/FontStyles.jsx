import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  h1 {
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    outline: none;
    box-sizing: border-box;
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
  }

  h2 {
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    outline: none;
    box-sizing: border-box;
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }

  p {
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    color: rgb(59, 65, 68);
    outline: none;
    box-sizing: border-box;
    letter-spacing: -0.1px;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export default FontStyles;
