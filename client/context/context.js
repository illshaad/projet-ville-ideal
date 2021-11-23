import { createContext, useContext, useState } from "react";

const consentCookieContext = createContext();

export const ConsentCookieProvider = ({ children }) => {
  const [consentCookie, setConsentCookie] = useState(null);
  const [display, setDisplay] = useState(false);
  return (
    <consentCookieContext.Provider
      value={{
        consentCookie,
        setConsentCookie,
        display,
        setDisplay,
      }}
    >
      {children}
    </consentCookieContext.Provider>
  );
};

export const useConsentCookie = () => useContext(consentCookieContext);
