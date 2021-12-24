import React, { useEffect , useState} from "react";
import AuthentificationComposant from "../../composants/authentification/AuthentificationComposant";
import { CardHome } from "../../styles/global";
import { useDataCity } from "../../context/context";
import Snackbar from "../../composants/snackbar/Snackbar";

export default function Authentification() {
  const { response } = useDataCity();
  const message = response?.data?.message;
  const status = response?.status;
  const [url , setUrl] = useState()

  useEffect(() => {   
    setUrl(window.location.href.split('email=')[1])
  },[]);
  
 
  return (
    <>
      <CardHome width="500px" height="620px">
        {url ? <AuthentificationComposant
          textWelcome="Connecter"
          textButton="Connection"
        /> : <AuthentificationComposant
        textWelcome="inscrire"
        textButton="Inscription"
      />}
      
      </CardHome>
      {response && <Snackbar message={message} status={status} />}
    </>
  );
}
