import React from "react";
import { Icon } from "antd";
import PersonCard from "../components/PersonCard";

const DashboardPage = () => {
  const friendList = [
    {
      imgUrl: "",
      name: "Minh",
      status: "okay"
    },
    {
      imgUrl: "",
      name: "John",
      status: "bad"
    },
    {
      imgUrl: "",
      name: "Jason",
      status: "okay"
    },
    {
      imgUrl: "",
      name: "Steph",
      status: "bad"
    }
  ];

  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <div>
          <Icon style={{ fontSize: "2em" }} type="user" /> Friends
        </div>
        <div className="columns is-multiline">
          {friendList.map((friend, index) => (
            <div className="column is-half">
              <PersonCard person={friend} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
