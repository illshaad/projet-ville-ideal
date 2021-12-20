import React from "react";
import AuthentificationComposant from "../../composants/authentification/AuthentificationComposant";
import { CardHome } from "../../styles/global";
import { useDataCity } from "../../context/context";

export default function Authentification() {
  const { responseAuth } = useDataCity();
  const message = responseAuth?.data?.message;

  return (
    <CardHome width="500px" height="550px">
      {message === "utilisateur existe dans la bdd" ? (
        <AuthentificationComposant
          textWelcome="connecter"
          textButton="Continuer"
        />
      ) : (
        <AuthentificationComposant
          textWelcome="inscrire"
          textButton="Inscription"
        />
      )}
    </CardHome>
  );
}
