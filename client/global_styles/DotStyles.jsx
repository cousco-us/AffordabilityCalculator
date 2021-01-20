import { createGlobalStyle } from 'styled-components';

const DotStyles = createGlobalStyle`
  .table-title-dot {
    background-color: #00adbb;
    color: #3b4144;
    letter-spacing: -0.1px;
    line-height: 24px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
`;

export default DotStyles;
