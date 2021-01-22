import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
* {
  font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 24px;
}

h1 {
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
  }

  h2 {
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }

  p {
    letter-spacing: -0.1px;
    font-size: 14px;
    line-height: 0;
  }

  .or-text {
    text-align: center;

    border-style: solid;
    border-color: transparent;
    border-width: 4px 2px 0px;

    width: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;

    font-size: 16px;
    line-height: 1.5;
  }

  .mortgage-rates-text a {
    border-style: solid;
    border-color: transparent;
    border-width: 4px 2px 0px;

    width: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;

    width: 100%;
    display: inline-block;
    text-align: center;

    color: rgb(0, 120, 130);
    text-decoration: none;

    font-size: 16px;
    line-height: 1.5;
  }

  /// HEAD STYLES ////
  .heading-container {
    padding-bottom: 16px;
  }

  /// FORM FONT STYLES ////
  .form-title {
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }

`;

export default FontStyles;
