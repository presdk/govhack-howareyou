import React from "react";
import Dot from "./Dot";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

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
    <VerticallyCentered style={{ marginBottom: "1em" }}>
      <Card 
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={name} style={{marginBottom: '0.5em'}} />
        <Meta title={<Dot color={dotColor} />}/>
      </Card>
    </VerticallyCentered>
  );
};

export default PersonCard;
