import styled from 'styled-components';

const GlobalStyles = styled.div`
  margin: 0px;
  padding: 0px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;

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

  .affordability-container {
    margin: 32px 0px;
    display: flex;
    flex-direction: column;
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

  // GLOBAL FONT STYLES //
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

  h3 {
    font-weight: 600;
    font-size: 1.2em;
    line-height: 1.2;
  }

  h4, .input-label {
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5;
  }

  p {
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: -0.1px;
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
`;

export default GlobalStyles;
