import React, { useContext } from "react";
import ThemeContex from "../context/ThemeContex";
import LanguageContext from "../context/LanguageContext";

export const FooterContext = () => {
  const { theme } = useContext(ThemeContex);
  const { texts } = useContext(LanguageContext);

  return (
    <footer className={theme}>
      <p>{texts.footerTitle}</p>
    </footer>
  );
};
