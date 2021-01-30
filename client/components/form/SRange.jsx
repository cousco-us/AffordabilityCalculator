import styled from 'styled-components';

const SRange = styled.input`
    width: 100%;
    height: 2px;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

  ::-webkit-slider-runnable-track {
    height: 2px;
    background: rgb(48, 118, 128);
    // background: linear-gradient(to right, rgb(0, 120, 130) 0%, rgb(0, 120, 130) 50%, rgb(205, 209, 212) 50%, rgb(205, 209, 212) 100%);
    }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: solid 4px white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(48, 118, 128);
    filter: drop-shadow(0.02em 0.08em 0.08em black);
    margin-top: -10px;
  }
`;

export default SRange;
