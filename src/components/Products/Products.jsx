import React from "react";
import css from "./Products.module.css";

const Products = ({ nombre, linkImagen, imgHeight, imgWidth }) => {
  return (
    <div>
      <img
        className={css.image}
        src={linkImagen}
        style={{ height: imgHeight, width: imgWidth }}
        alt="product"
      />
      <p className={css.productTitle}>{nombre}</p>
    </div>
  );
};

export default Products;
