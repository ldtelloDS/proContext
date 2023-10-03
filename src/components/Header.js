import React from "react";

export const Header = ({ theme, handleTheme, texts, handleLanguage, auth,handleAuth }) => {
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
        id="light"
        value="light"
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        type="radio"
        onClick={handleTheme}
        name="theme"
        id="dark"
        value="dark"
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogOut : texts.buttonLogIn}
      </button>
    </header>
  );
};
