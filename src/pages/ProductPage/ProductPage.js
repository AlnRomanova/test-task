import React from "react";
import Products from "../../components/ProductsList/Products";
import css from './ProductPage.module.css';
import { useState, useEffect } from "react";
import { fetchProducts } from '../../services/productsAPI';

const ProductPage = () => {
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
  <h1 className={css.productPageTitle}>Product Page
  </h1>  
  <ul className={css.productList}>
    {products.slice(0,8).map(({ id, nombre, linkImagen}) => (
        <li  key={id}>
         <Products nombre={nombre} linkImagen={linkImagen}  />
        </li>
        ))}
    </ul>
  </>
  )

};

export default ProductPage;
