import React from "react";
import AuthentificationComposant from "../../composants/authentification/AuthentificationComposant";
import { CardHome } from "../../styles/global";
import { useDataCity } from "../../context/context";
import Snackbar from "../../composants/snackbar/Snackbar";

export default function Authentification() {
  const { response } = useDataCity();
  const message = response?.data?.message;
  const status = response.status;

  return (
    <>
      <CardHome width="500px" height="500px">
        <AuthentificationComposant
          textWelcome="inscrire"
          textButton="Inscription"
        />
      </CardHome>
      {response && <Snackbar message={message} status={status} />}
    </>
  );
}
