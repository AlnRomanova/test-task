import React from 'react';
import css from './HomePage.module.css';
import CustomArrows from '../../components/Slider/Slider';
import { useState, useEffect } from "react";
import { fetchProducts } from '../../services/productsAPI';


const HomePage = () => {
  const [products, setProdacts] = useState('');
   
  useEffect(() => {
    fetchProducts()
    .then(setProdacts)
  }, []);

  if (!products) {
    return null;
  }

  return (
    <>
    <h1 className={css.homePageTitle}>Home Page</h1>
   <CustomArrows products={products}/>
    </>
    
  )
};

export default HomePage;
