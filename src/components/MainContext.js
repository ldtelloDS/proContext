import React, { useContext } from "react";
import ThemeContex from "../context/ThemeContex";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

export const MainContext = () => {
  const { theme } = useContext(ThemeContex);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <main className={theme}>
      {auth ? <p>{texts.mainWelcome}</p> : <p>{texts.mainHello}</p>}
      <p>{texts.mainContent}</p>
      
    </main>
  );
};
