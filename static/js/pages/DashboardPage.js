import React from "react";
import { Icon } from "antd";
import PersonCard from "../components/PersonCard";
import MainLogo from "../components/MainLogo";

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
    <div className="columns is-multiline">
      <div className="column is-12 has-text-centered">
        <MainLogo />
      </div>
      <div className="column is-12" style={{ marginBottom: "1em" }}>
        <Icon className="is-size-3" type="user" />{" "}
        <span className="is-size-3">Friends</span>
      </div>
      <div className="column is-12">
        <div className="columns is-multiline">
          {friendList.map((friend, index) => (
            <div className="column is-2">
              <PersonCard person={friend} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
