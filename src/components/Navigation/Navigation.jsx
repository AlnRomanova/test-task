import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';


const Navigation = () => {

  return (
    <nav>
       <NavLink className={css.title}  to="/">Home</NavLink>
       <NavLink className={css.title}  to="/products">Products</NavLink>
    </nav>
  );
};

export default Navigation;