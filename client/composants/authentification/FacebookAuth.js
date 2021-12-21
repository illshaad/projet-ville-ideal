import React from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookAuth() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_AUTH_FACEBOOK}
      fields="name,email,picture"
      cssClass="btnSocial"
      callback={responseFacebook}
      textButton="Connection Facebook"
    />
  );
}
