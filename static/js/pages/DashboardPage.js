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
    <div>
      <div style={{marginBottom: '1em'}}>
        <Icon style={{ fontSize: "2em" }} type="user" /> Friends
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            {friendList.map((friend, index) => (
              <div className="col-lg-6">
                <PersonCard person={friend} key={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
