import React from "react";
import Product from "../../components/Product";
import css from "./ProductPage.module.css";
import { useSelector } from "react-redux";
import { selectProducts } from "../../components/redux/productsSelector";


const ProductPage = () => {
const products = useSelector(selectProducts);
if (products.length === 0) {
  return null
 }
  
  return (
    <>
      <h1 className={css.productPageTitle}>Product Page</h1>
      <ul className={css.productList}>
        {products.map(({ id, name, image, temperament }) => (
          <li key={id} className={css.productItem}>
            <Product
              name={name}
              image={image.url}
              temperament={temperament}
              imgHeight={"362px"}
              imgWidth={"350px"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
