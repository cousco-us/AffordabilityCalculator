import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  letter-spacing: -0.1px;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`;

const Label = styled.h2`
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  letter-spacing: -0.1px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
`;

const Text = styled.p`
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  letter-spacing: -0.1px;
  font-size: 12px;
  line-height: 1.5;
`;

const Head = () => (
  <div id="head">
    <Title>Affordability</Title>
    <Label>Calculate your monthly mortgage payments</Label>
    <Text>Your est. payment: $13,035/month*</Text>
  </div>
);

export default Head;
