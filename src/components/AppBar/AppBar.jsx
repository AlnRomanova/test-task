import React from "react";
import Navigation from "../Navigation";
import css from "../AppBar/AppBar.module.css";
import logoIcon from "../../images/logoIcon.svg";

const AppBar = () => {
  return (
    <header className={css.header}>
      <div>
        <img src={logoIcon} alt="logo" />
      </div>
      <Navigation />
    </header>
  );
};

export default AppBar;
