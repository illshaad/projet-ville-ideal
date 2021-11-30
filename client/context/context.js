import { createContext, useContext, useState } from "react";

const dataCityContext = createContext();

export const DataCityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [display, setDisplay] = useState(false);
  const [response, setResponse] = useState();
  const [dinamiqueMarker, setDinamiqueMarker] = useState(null);
  const [selectCityInfoWindows, SetselectCityInfoWindows] = useState(null);
  const [closeWindows, setCloseWindows] = useState(false);
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
        closeWindows,
        setCloseWindows,
      }}
    >
      {children}
    </dataCityContext.Provider>
  );
};

export const useDataCity = () => useContext(dataCityContext);
