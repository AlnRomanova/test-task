import React from 'react';
import css from './HomePage.module.css';
import ProductsList from "../../components/ProductsList/ProductsList";


const HomePage = () => {
 

  return (
    <>
    <h1 className={css.homePageTitle}>Home Page</h1>
    <ProductsList/>
    </>
    
  )
};

export default HomePage;
