import React from "react";

const Smiley = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
      width="128px"
      height="128px"
    ></img>
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

  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <div>
          <Smiley />
        </div>
        <div>
          <p>Assessment Completed</p>
        </div>
        <hr />
        <div>
          <p>Share your results!</p>
        </div>
        <div>
          <a className="button is-primary is-link is-rounded is-medium">
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
