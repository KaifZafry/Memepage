
import React, { createContext, useState } from 'react';

// Create the context
export const LangContext = createContext();

// Create a provider component
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
