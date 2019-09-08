import React, { useEffect } from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);

  if (response.status === 'connected') {
    const accessToken = response.authResponse.accessToken;

    console.log("Access token incoming");
    console.log(accessToken);

    fetch("https://govhack.cheez.dev/api/login/social/token/facebook/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: accessToken,
        redirect_url: "https://govhack.cheez.dev/"
      })
    })
        .then() //todo
        .catch(res => console.log(res));
  }
};

const LoginPage = () => {
  useEffect(() => {
      // do something
  });

  return (
    <div className="container">
      <FacebookLogin
        appId="2391165474312244"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginPage;
