import { createGlobalStyle } from 'styled-components';

const ResultStyles = createGlobalStyle`
  .results-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .results-cell {
    display: flex;
    min-width: 50%;
    margin: 33px 0px;
  }

  .inner-donut-container {
    width: 280px;
    height: 280px;
    margin: auto;
  }
`;

export default ResultStyles;
