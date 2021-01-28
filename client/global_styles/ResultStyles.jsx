import styled from 'styled-components';

const ResultStyles = styled.div`
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

  .results-table-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
  }

  .table-container {
    display: flex;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
  }


  .table {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .table-col {
    letter-spacing: -0.1px;
    font-size: 16px;
  }

  .table-col.category {
    order: 1;
  }

  .table-col.money {
    order: 2;
    font-weight: bold;
  }
`;

export default ResultStyles;
