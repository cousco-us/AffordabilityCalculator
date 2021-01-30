import styled from 'styled-components';

const GlobalStyles = styled.div`


  margin: 0px;
  padding: 0px;
  background-color: rgb(255, 255, 255);

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
  @import url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);
  font-family: 'Cabin', Arial, Helvetica, sans-serif;
  color: rgb(59, 65, 68);
  letter-spacing: -0.1px;

  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
  }

  h2 {
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
    letter-spacing: 0.6px;
  }

  p.header-paragraph {
    font-size: 16px;
    margin-top: -12px;
    letter-spacing: 0.6px;
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
