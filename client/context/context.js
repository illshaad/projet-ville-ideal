import { createContext, useContext, useState } from "react";

const dataCityContext = createContext();

export const DataCityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [display, setDisplay] = useState(false);
  const [response, setResponse] = useState();
  const [responseAuth, setResponseAuth] = useState();
  const [dinamiqueMarker, setDinamiqueMarker] = useState(null);
  const [selectCityInfoWindows, SetselectCityInfoWindows] = useState(null);
  return (
    <dataCityContext.Provider
      value={{
        city,
        setCity,
        display,
        setDisplay,
        response,
        setResponse,
        dinamiqueMarker,
        setDinamiqueMarker,
        selectCityInfoWindows,
        SetselectCityInfoWindows,
        responseAuth,
        setResponseAuth,
      }}
    >
      {children}
    </dataCityContext.Provider>
  );
};

export const useDataCity = () => useContext(dataCityContext);
