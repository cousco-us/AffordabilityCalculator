import { createGlobalStyle } from 'styled-components';

const ResultStyles = createGlobalStyle`

.results-container {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}

.donut-outer {
  margin: 32px 32px 32px 16px;
}

.donut-inner {
  width: 280px;
  position: relative;
  box-sizing: border-box;
  margin: auto;
  flex-shrink: 0;
}

.donut {
  width: 280px;
  height: 280px;
}

.results-table-container {
  box-sizing: border-box;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px 0px 16px 16px;
  min-width: 50%;
}

.results-table {
  flex: 1 1 0px;
  width: 100%;
  margin: 0px 8px;
}

.result-row-outer {

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
}

.result-row-inner {
  flex-direction: row;
  -webkit-box-align: center;
  // align-items: center;
  display: flex;
}

.heading-col {
  font-size: 16px;
  line-height: 1.5;

  // flex: 4;
  flex: 1 1 0px;
  width: 100%;
  margin: 0px 8px;
}

.value-col {
  // flex: 1;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
}


`;

export default ResultStyles;
