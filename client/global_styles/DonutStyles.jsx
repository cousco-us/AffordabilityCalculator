import styled from 'styled-components';

const DonutStyles = styled.div`
// .donutSvg circle{
//   transform: rotate(-90deg);
// }

.donut-text {
    font: 16px/1.4em;
    fill: rgb(59, 65, 68);
    -moz-transform: translateY(0.25em);
    -ms-transform: translateY(0.25em);
    -webkit-transform: translateY(0.25em);
    transform: translateY(0.25em);

  }

  .donut-label-amount {
    font-weight: 700;
    color: rgb(59, 65, 68);
    font-size: 0.4em;
    text-anchor: middle;
    -moz-transform: translateY(-0.25em);
    -ms-transform: translateY(-0.25em);
    -webkit-transform: translateY(-0.25em);
    transform: translateY(-0.25em);

  }

  .donut-label-unit {
    font-size: 0.15em;
    text-anchor: middle;
    -moz-transform: translateY(0.7em);
    -ms-transform: translateY(0.7em);
    -webkit-transform: translateY(0.7em);
    transform: translateY(0.7em);
    letter-spacing: 0.1px;
  }
`;

export default DonutStyles;
