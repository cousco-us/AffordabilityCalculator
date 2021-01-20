import { createGlobalStyle } from 'styled-components';

const FormStyles = createGlobalStyle`
  .form-container {
    padding: 0px 0px 16px;
    color: rgb(59, 65, 68);
  }

  .flex-container-row {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgb(245, 246, 247);
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .grid-container {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -16px;
    flex-wrap: wrap;
  }

  .grid-cell-box {
    border-style: solid;
    border-color: transparent;
    border-width: 16px 8px 0px;
    width: 33%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;
  }

  .affordability-input-controls-container {
    box-sizing: border-box;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2px;
  }

  .affordability-input-controls {
    flex: 1 1 0%;
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 48px;
  }

  #input-control-home-price-input {
    border-radius: 8px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  }
`;

export default FormStyles;
