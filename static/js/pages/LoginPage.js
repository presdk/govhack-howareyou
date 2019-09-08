import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import MainLogo from "../components/MainLogo";

const LoginPage = props => {
  const { handleLogin } = props;

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
      .then(res => {
        handleLogin(res);
      }) //todo
      .catch(res => handleLogin(res));
  };

  useEffect(() => {
    // do something
  });

  return (
    <div className="columns is-multiline is-vcentered">
      <div className="column is-12 has-text-centered">
        <MainLogo />
      </div>
      <div className="column is-12 is-size-3 has-text-centered">Sign In</div>
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
