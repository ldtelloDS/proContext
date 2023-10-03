import React from "react";

export const Footer = ({ theme, texts, auth }) => {
  return (
    <footer className={theme}>
      <p>{texts.footerTitle}</p>
    </footer>
  );
};
