import React, { useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Aplicacion sin Context API",
    headerSubTitle: "La Cabecera esta brutal Brother",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogIn: "Iniciar Sesion",
    buttonLogOut: "Cerrar Sesion",
    mainWelcome: "Bienvenido Invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi Contenido Principal",
    footerTitle: "Oye!!! este ese el Footer",
  },
  en: {
    headerTitle: "Aplication without Context",
    headerSubTitle: "The Header is Brutal",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogIn: "Login",
    buttonLogOut: "LogOut",
    mainWelcome: "Welcome Brother",
    mainHello: "Hello Brother",
    mainContent: "My main event Content",
    footerTitle: "Hey!!! This is the Footer",
  },
};
const initialAuth = false;

export const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  
  const handleAuth = (e) => {
    
    setAuth(!auth);
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
