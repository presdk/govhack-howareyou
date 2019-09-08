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
      options: ["0-10", "11-20", "21-30", "31-40", "41-50", "51+"]
    },
    {
      title: "Gender",
      options: ["Male", "Female", "Other"]
    },
    {
      title: "Ethnicity",
      options: ["Asian", "Dummy"]
    },
    {
      title: "Region",
      options: ["Auckland", "Wellington", "Dummy"]
    }
  ];

  return (
    <div className="columns is-multiline is-centered">
      <div className="column is-12 has-text-centered">
        <MainLogo />
      </div>
      <div className="column is-half is-offset-one-quarter">
        <p className="is-size-4">Create Your Profile</p>
        <div>
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
        <p>
          <Link to="/completed" className="button is-link">Submit</Link>
        </p>
      </div>
    </div>
  );
};

export default StartPage;
