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

  .form-title {
    letter-spacing: -0.1px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
    order: 1;
  }

  .form-input {
    order: 2;
    margin-left: auto;
  }

  .form-control.dropdown {
    margin-top: -7px;
  }

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

  #input-control-interest-rate-dropdown-select:focus, #input-control-interest-rate-dropdown-select:focus-within {
    outline: none;
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0 120 130) 0px 0px 0px 2px;
  }

  @media only screen and (max-width: 750px) {
    .form-container {
      flex-direction: column;
    }
  }
`;

export default FormStyles;
