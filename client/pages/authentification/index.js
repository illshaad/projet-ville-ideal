import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthentificationComposant from "../../composants/authentification/AuthentificationComposant";
import { CardHome } from "../../styles/global";
import { useDataCity } from "../../context/context";
import Snackbar from "../../composants/snackbar/Snackbar";
import { createUser, loginUser, redirectionJwt } from "../../service/api";

export default function Authentification() {
  const router = useRouter();
  const { response, setResponse } = useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(window.location.href.split("email=")[1]);
    if (response?.token) {
      //JE NE CEST PAS QUOI FAIRE !!!! JE RECUPERE LE JWT ET ENSUIT JE REDIRECTION SUR LAPPLICATION ?????
      const responseToken = redirectionJwt(response.token);
    }
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    if (!url) {
      const response = await createUser(data);
      setResponse(response);
    } else {
      const response = await loginUser(data);
      setResponse(response);
    }
  };

  return (
    <>
      <CardHome width="500px" height="620px">
        {url ? (
          <AuthentificationComposant
            textWelcome="Connecter"
            textButton="Connection"
            onSubmit={onSubmit}
          />
        ) : (
          <AuthentificationComposant
            textWelcome="inscrire"
            textButton="Inscription"
            onSubmit={onSubmit}
          />
        )}
      </CardHome>
      {response && <Snackbar message={message} status={status} />}
    </>
  );
}
