import React from "react";
import css from "./Product.module.css";

const Product = ({ name, image, temperament, imgHeight, imgWidth }) => {
  return (
    <div>
      <img
        className={css.image}
        src={image}
        alt="product"
        style={{ height: imgHeight, width: imgWidth }}
      />
      <p className={css.productTitle}>{name}</p>
      <p className={css.productDescription}>{temperament}</p>
    </div>
  );
};

export default Product;
