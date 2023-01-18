import React from "react";
import Navigation from "../Navigation";
import css from "./Header.module.css";
import logoIcon from "../../images/logoIcon.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <img src={logoIcon} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
