import React from "react";

const Smiley = () => {
  return (
    <center>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
        width="128px"
        height="128px"
      ></img>
    </center>
  );
};

const CompletedPage = () => {
  // fetch('http://localhost:8000/hello')
  // .then(function(response) {
  //   console.log(response.json());
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });

  return (
    <div className="row">
      <div className="col-lg-4 offset-lg-4 text-center">
        <Smiley />
        <p>Assessment Completed</p>
        <hr />
        <p>Share your results!</p>
        <br />
        <a className="button is-link is-rounded is-medium">Share</a>
      </div>
    </div>
  );
};

export default CompletedPage;
