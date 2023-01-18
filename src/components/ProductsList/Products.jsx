import React from 'react';
import css from '../ProductsList/Products.module.css';



const Products = ({ nombre, linkImagen,}) => {
  return (
        <div className={css.productItem}>
          <img
            className={css.image}
            src={linkImagen}
            alt="product"
          />
          <p className={css.productTitle}>{nombre}</p>
        </div>
  )
}

export default Products;
