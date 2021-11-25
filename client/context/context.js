import { createContext, useContext, useState } from "react";

const dataCityContext = createContext();

export const DataCityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [display, setDisplay] = useState(false);
  const [response, setResponse] = useState();

  return (
    <dataCityContext.Provider
      value={{
        city,
        setCity,
        display,
        setDisplay,
        response,
        setResponse,
      }}
    >
      {children}
    </dataCityContext.Provider>
  );
};

export const useDataCity = () => useContext(dataCityContext);
