import { createGlobalStyle } from 'styled-components';

const DonutStyles = createGlobalStyle`
  .donut-text {
    font: 16px/1.4em "Montserrat", Arial, sans-serif;
    fill: #000;
    -moz-transform: translateY(0.25em);
    -ms-transform: translateY(0.25em);
    -webkit-transform: translateY(0.25em);
    transform: translateY(0.25em);
  }

  .donut-label-amount {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    -moz-transform: translateY(-0.25em);
    -ms-transform: translateY(-0.25em);
    -webkit-transform: translateY(-0.25em);
    transform: translateY(-0.25em);
  }

  .donut-label-unit {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    -moz-transform: translateY(0.7em);
    -ms-transform: translateY(0.7em);
    -webkit-transform: translateY(0.7em);
    transform: translateY(0.7em);
  }
`;

export default DonutStyles;
