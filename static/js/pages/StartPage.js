import React, { useEffect } from "react";
import { Link } from "react-router-dom";

async function fetchData() {
  return await fetch("http://govhack.cheez.dev:8000/me")
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
    fetchData().then((data) => {
        // console.log(JSON.stringify(data));
    });
    
  });

  return (
    <div className="row">
      <div className="col-lg-4 offset-lg-4">
        Start page
        <br />
        <Link to="/completed">To completed</Link>
        <br />
        <Link to="/dashboard">To dashboard</Link>
      </div>
    </div>
  );
};

export default StartPage;
