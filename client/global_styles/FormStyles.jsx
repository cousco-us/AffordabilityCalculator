import styled from 'styled-components';

const FormStyles = styled.div`
  .form-container {
    background-color: rgb(245, 246, 247);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 8px 16px;
  }

  .form-cell {
    display: flex;
    flex-direction: column;
    min-width: 31%;
    margin: 0px 6px;
  }

  .form-control {
    display: flex;
    align-items: center;
    margin: 15px 0px;
  }

  // .form-control title-and-input {

  // }

  .form-title {
    order: 1;
  }

  .form-input {
    order: 2;
    margin-left: auto;
  }

  // .form-control.slider {
  //   width: 100%;
  // }

  .form-control.dropdown {
    margin-top: -7px;
  }

  // #input-control-home-price-input {
  //   width: 112px;
  // }

  // #input-control-down-payment-dollar-input {
  //   width: 100px;
  //   border-radius: 6px 0px 0px 6px;
  // }

  // #input-control-down-payment-percent-input {
  //   width: 56px;
  //   border-radius: 0px 6px 6px 0px;
  //   margin-left: -1px;
  // }

  // #input-control-interest-rate-input {
  //   width: 75px;
  // }

  #input-control-interest-rate-dropdown-select {
    @import url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);
    font-family: 'Cabin', Arial, Helvetica, sans-serif;
    color: rgb(59, 65, 68);

    width: 100%;
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;

    border-radius: 8px;
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
