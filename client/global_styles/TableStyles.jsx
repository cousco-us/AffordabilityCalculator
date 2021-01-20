import { createGlobalStyle } from 'styled-components';

const TableStyles = createGlobalStyle`
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    flex-grow: 1;
  }

  .full-width {
    flex: 100%;
  }

`;

export default TableStyles;
