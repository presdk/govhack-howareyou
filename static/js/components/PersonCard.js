import React from "react";
import Dot from "./Dot";
import styled from "styled-components";

const PersonCard = props => {
  const { person } = props;
  const { imgUrl, name, status } = person;
  const dotColor = status === "okay" ? "green" : "red";

  return (
    <div className="has-text-center">
      <div>
        <img
          width="50px"
          height="50px"
          style={{ marginRight: "1em" }}
          src={imgUrl}
        />
      </div>
      <div className="columns is-vcentered">
          <span style={{ marginRight: "1em" }}>{name}</span>
          <Dot color={dotColor} />
      </div>
    </div>
  );
};

export default PersonCard;
