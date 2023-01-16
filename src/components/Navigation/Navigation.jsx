import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {


  return (
    <nav>
        <NavLink  to="/">Home</NavLink>
       <NavLink  to="/products">Products</NavLink>
    </nav>
  );
};

export default Navigation;