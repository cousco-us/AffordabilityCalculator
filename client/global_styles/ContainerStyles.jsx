import { createGlobalStyle } from 'styled-components';

const ContainerStyles = createGlobalStyle`
  #calculator {
    max-width: 960px;
    margin: auto;
  }

  #head {
    padding: 16px;
  }

  #form {
    background-color: rgb(245, 246, 247);
    border-radius: 8px;
    padding: 16px;
  }

  #results {
    padding: 16px;
  }

  .form-stack {
    // display: flex;
    // flex-direction: column;
  }

  .form-stack-cell {

  }



  .container {
    display: flex;
  }
  .donut-container {
    flex: 1;
  }
  .results-list-container {
    flex: 2;
  }
`;

export default ContainerStyles;
