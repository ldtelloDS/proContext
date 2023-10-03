import React, { useContext } from "react";
import ThemeContex from "../context/ThemeContex";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";

export const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContex);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme}>
      <h1>{texts.headerTitle}</h1>
      <h2>{texts.headerSubTitle}</h2>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        onClick={handleTheme}
        name="theme"
        id="light-context"
        value="light"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        onClick={handleTheme}
        name="theme"
        id="dark-context"
        value="dark"
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogOut : texts.buttonLogIn}
      </button>
    </header>
  );
};
