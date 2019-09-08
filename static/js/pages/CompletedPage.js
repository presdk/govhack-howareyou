import React from "react";
import PieChart from "react-minimal-pie-chart";
import MainLogo from "../components/MainLogo";
import { Link } from "react-router-dom";

const Smiley = () => {
  return (
    <span style={{ fontSize: "5em" }}>
      <strong>😊</strong>
    </span>
  );
};

const CompletedPage = () => {
  // fetch('http://govhack.cheez.dev:8000/hello')
  // .then(function(response) {
  //   console.log(response.json());
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });

  const results = [
    {
      title: "Gender",
      description:
        "Considering seconds in New Zealand, 55% of them have expressed their satisfaction of life; while 45% reported low life satisfaction",
      first: ["Male", 55],
      second: ["Female", 45]
    },
    {
      title: "Age",
      description:
        "Among people aged 21 in New Zealand, 73% of people have expressed their satisfaction of life; while 27% reported low life satisfaction",
      first: ["21", 55],
      second: ["Others", 45]
    },
    {
      title: "Region",
      description:
        "Among people of Auckland, 79% of residents have have expressed their satisfaction of life; while 21% reported low life satisfaction",
      first: ["Auckland", 55],
      second: ["Others", 45]
    },
    {
      title: "Ethnicity",
      description:
        "Among the European group, 81% of people have have expressed their satisfaction of life; while 27% reported low life satisfaction",
      first: ["European", 55],
      second: ["Others", 45]
    }
  ];

  return (
    <div className="columns is-multiline">
      <div className="column is-12 has-text-centered">
        <MainLogo />
      </div>
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <p>
          <Smiley />
        </p>
      </div>
      <div className="column is-12 is-size-4 has-text-centered">
        Thanks for sharing!
      </div>
      <hr />
      <div
        className="column is-12 is-size-4 has-text-centered"
        style={{ marginBottom: "2em" }}
      >
        Here are some interesting facts
      </div>
      {results.map((result, index) => {
        const { title, description, first, second } = result;
        return (
          <div className="column is-12">
            <div className="columns is-vcentered">
              <div className="column is-6">
                <PieChart
                  className="is-size-4"
                  key={index}
                  width="50px"
                  data={[
                    { title: first[0], value: first[1], color: "#E38627" },
                    { title: second[0], value: second[1], color: "#C13C37" }
                  ]}
                  lineWidth={20}
                  paddingAngle={18}
                  rounded
                  label
                  labelStyle={{
                    fontSize: "0.5em",
                    fontFamily: "sans-serif"
                  }}
                  labelPosition={60}
                  style={{ height: "200px" }}
                />
              </div>
              <div className="column is-6">
                <p className="is-size-3">{title}</p>
                <p className="is-size-4">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="column">
        <Link
          class="button is-pulled-right is-link is-outlined"
          to="/dashboard"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default CompletedPage;
