import { createContext, useContext, useState } from "react";

const dataCityContext = createContext();

export const DataCityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [display, setDisplay] = useState(false);

  return (
    <dataCityContext.Provider
      value={{
        city,
        setCity,
        display,
        setDisplay,
      }}
    >
      {children}
    </dataCityContext.Provider>
  );
};

export const useDataCity = () => useContext(dataCityContext);
