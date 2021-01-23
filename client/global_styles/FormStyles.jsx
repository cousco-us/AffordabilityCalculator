import { createGlobalStyle } from 'styled-components';

const FormStyles = createGlobalStyle`
  .form-container {
    background-color: rgb(245, 246, 247);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px;
  }

  .form-cell {
    display: flex;
    flex-direction: column;
    min-width: 33%;
  }

  .form-control {
    display: flex;
    padding: 6px;
    align-items: center;
  }

  .form-control title-and-input {

  }

  .form-title {
    order: 1;
  }

  .form-input {
    order: 2;
    margin-left: auto;
  }

  .form-control.slider {
    width: 100%;
    padding: 24px 0px;
  }

  .form-control dropdown {

  }

  input {
    font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
    letter-spacing: -0.1px;
    font-size: 16px;
    line-height: 1.5;
    padding: 6px;
    border-radius: 6px;
    border: solid 0.01em rgb(205, 209, 212);
  }

  #input-control-home-price-input {
    width: 112px;
  }

  #input-control-down-payment-dollar-input {
    width: 100px;
    border-radius: 6px 0px 0px 6px;
  }

  #input-control-down-payment-percent-input {
    width: 56px;
    border-radius: 0px 6px 6px 0px;
    margin-left: -1px;
  }

  #input-control-interest-rate-input {
    width: 75px;
  }

  #input-control-interest-rate-dropdown-select {
    width: 100%;

    font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;

    border-radius: 6px;
    border: solid 0.01em rgb(205, 209, 212);

    padding: 12px 4px;
  }

  .calculator-slider {
    width: 100%;
    height: 2px;
    appearance: none;
    outline: none;
    margin: 0px;
    padding: 0px;

    // background: linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) 86.9565%, rgb(205, 209, 212) 86.9565%, rgb(205, 209, 212) 100%);
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: solid 4px white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(48, 118, 148);
    filter: drop-shadow(0.02em 0.08em 0.08em black);
  }

  @media only screen and (max-width: 750px) {
    .form-container {
      flex-direction: column;
    }
  }
`;

export default FormStyles;
