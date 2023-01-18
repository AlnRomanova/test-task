import React from "react";
import css from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={css.container}>
      <footer className={css.footer}>
        <p className={css.footerTitle}>2021 © copyright</p>
      </footer>
    </div>
  );
};

export default Footer;
