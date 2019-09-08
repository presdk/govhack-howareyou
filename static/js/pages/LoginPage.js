import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);
  const { accessToken } = response;

  console.log("Access token incoming");
  console.log(accessToken);

  fetch("https://govhack.cheez.dev/api/login/social/token/facebook/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      code: accessToken,
      redirect_url: "https://govhack.cheez.dev/"
    })
  })
    .then() //todo
    .catch(res => console.log(res));
};

const LoginPage = () => {
  useEffect(() => {
    // do something
  });

  return (
    <div className="columns is-multiline">
      <div className="column is-12 is-size-3 has-text-centered">
        Sign In
      </div>
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <FacebookLogin
          className="is-text-center"
          appId="2391165474312244"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </div>
  );
};

export default LoginPage;
