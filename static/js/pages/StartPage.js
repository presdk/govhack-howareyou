import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../components/MainLogo";
import DropdownField from "../components/DropdownField";

async function fetchData() {
  return await fetch("https://govhack.cheez.dev/me/")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

const StartPage = () => {
  useEffect(() => {
    fetchData().then(data => {
      // console.log(JSON.stringify(data));
    });
  });

  const fields = [
    {
      title: "Age",
      options: ["Option 1", "Option 2"]
    },
    {
      title: "Gender",
      options: ["Option 1", "Option 2"]
    },
    {
      title: "Ethnicity",
      options: ["Option 1", "Option 2"]
    },
    {
      title: "Region",
      options: ["Option 1", "Option 2"]
    }
  ];

  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <p className="is-size-3">Create Your Profile</p>
        <div style={{ marginBottom: "1em" }}>
          {fields.map((field, index) => {
            return (
              <p>
                <DropdownField
                  key={index}
                  title={field.title}
                  options={field.options}
                />
              </p>
            );
          })}
        </div>
        <div>
          <a className="button is-link">Submit</a>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
