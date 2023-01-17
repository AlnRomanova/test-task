import React from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import css from './ProductPage.module.css';

const ProductPage = () => {
  return (
    <>
  <h1 className={css.productPageTitle}>Product Page
  </h1>  
  <ProductsList/>
  </>
  )

};

export default ProductPage;
