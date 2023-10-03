import { createContext, useState } from "react";

const ThemeContex = createContext();
const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = {theme, handleTheme};
  return <ThemeContex.Provider value={data}>{children}</ThemeContex.Provider>;
};

export {ThemeProvider};
export default ThemeContex;
