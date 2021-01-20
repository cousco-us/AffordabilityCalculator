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
    display: flex;
  }

  .form-stack-cell {
    flex-direction: column;
  }
`;

export default ContainerStyles;
