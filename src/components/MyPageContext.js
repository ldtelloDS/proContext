import React from "react";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";
import { FooterContext } from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContex";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

export const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
