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
    // container styles
    display: flex;
    flex-direction: column;
    min-width: 33%;

    // content styles
  }

  .form-control {
    display: flex;
  }

  .form-control title-and-input {
    // display: flex;
    // justify-content: space-between;
    // align-items: stretch;
    // align-content: space-between;

    flex-direction: row;
    flex-wrap: no-wrap;
    // justify-content: flex-end;
  }

  .form-title {
    // align-self: flex-start;
    flex-grow: 1;
    order: 1;
  }

  .form-input {
    // align-self: flex-end;
    flex-grow: 2;
    order: 2;
  }

  .form-control slider {
    // width: 100%;
  }

  .form-control dropdown {
    width: 100%;
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

    padding: 6px;
  }



  @media only screen and (max-width: 750px) {
    .form-container {
      flex-direction: column;
    }
  }
`;

export default FormStyles;
