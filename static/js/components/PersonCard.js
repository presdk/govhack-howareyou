import React from 'react';
import Dot from './Dot';
import styled from 'styled-components';

const VerticallyCentered = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const PersonCard = props => {
  const { person } = props;
  const { imgUrl, name, status } = person;
  const dotColor = status === "okay" ? "green" : "red";

  return (
    <VerticallyCentered style={{marginBottom: '1em'}}>
      <img width="50px" height="50px" style={{marginRight: '1em'}} src={imgUrl} />
      <span style={{marginRight: '1em'}}>{name}</span>
      <Dot color={dotColor} />
    </VerticallyCentered>
  );
};

export default PersonCard;