import { createContext, useState } from "react";

const LanguageContext = createContext();
const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Aplicacion con Context API",
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
    headerTitle: "Aplication with Context",
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

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
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
  const data = {texts,handleLanguage};
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };
export default LanguageContext;
