import { createGlobalStyle } from 'styled-components';

const DonutStyles = createGlobalStyle`
  .donut-text {
    font-family: TruliaSans, Roboto, "Segoe UI Bold", Arial, sans-serif;
    font: 16px/1.4em;
    fill: rgb(59, 65, 68);
    -moz-transform: translateY(0.25em);
    -ms-transform: translateY(0.25em);
    -webkit-transform: translateY(0.25em);
    transform: translateY(0.25em);
  }

  .donut-label-amount {
    font-weight: 400;
    color: rgb(59, 65, 68);
    font-size: 0.6em;
    text-anchor: middle;
    -moz-transform: translateY(-0.25em);
    -ms-transform: translateY(-0.25em);
    -webkit-transform: translateY(-0.25em);
    transform: translateY(-0.25em);
  }

  .donut-label-unit {
    font-size: 0.2em;
    font-weight: 100;
    text-anchor: middle;
    -moz-transform: translateY(0.7em);
    -ms-transform: translateY(0.7em);
    -webkit-transform: translateY(0.7em);
    transform: translateY(0.7em);
  }
`;

export default DonutStyles;
