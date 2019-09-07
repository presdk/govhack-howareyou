import React from 'react';
import styled from 'styled-components';

const Dot = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${props => (props.color === "green" ? "#79b47c" : "#ff9999")};
  border-radius: 50%;
  display: inline-block;
`;

export default Dot;