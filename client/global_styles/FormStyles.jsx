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

  .form-control slider {

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



  @media only screen and (max-width: 750px) {
    .form-container {
      flex-direction: column;
    }
  }
`;

export default FormStyles;
