import React from "react";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";

export default function GoogleAuth() {
  const router = useRouter();

  const responseGoogle = (response) => {
    if (response) router.push("/application");
  };

  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_AUTH_GOOGLE}
      buttonText="Connection"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      //   isSignedIn={true}
    />
  );
}
