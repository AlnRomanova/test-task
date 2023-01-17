import React from 'react';
import css from '../ProductsList/ProductsList.module.css';
import { useState, useEffect } from "react";
import { fetchProducts } from '../../services/productsAPI';


const ProductsList = () => {

  const [products, setProdacts] = useState('');
   
  useEffect(() => {
    fetchProducts()
    .then(setProdacts)
  }, []);

  if (!products) {
    return null;
  }

  return (
     <ul className={css.productList}>
    {products.slice(0,8).map(({ id, nombre, linkImagen, description }) => (
        <li className={css.productItem} key={id}>
          <img
            className={css.image}
            src={linkImagen}
            alt="product"
          />
          <p className={css.productTitle}>{nombre}</p>
          <p className={css.productDescription}>{description}</p>
        </li>
        ))}
    </ul>
  
  )
}

export default ProductsList;
