import React, { useEffect } from "react";
import { Link } from "react-router-dom";

async function fetchData() {
  return await fetch("http://localhost:8000/me")
  .then(response => {
    return response.json();
  });
}

const StartPage = () => {
  useEffect(() => {
    fetchData().then((data) => {
        console.log(data);
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
