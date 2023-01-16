import React from 'react';
import css from '../ProductsList/ProductsList.module.css';
import img from '../../images/image 4.jpg';



const ProductsList = () => {
  return (
    <>
     <ul className={css.productList}>
      <li className={css.productItem}>
        <img className={css.image} src={img} alt="" />
        <p className={css.productTitle}>Hardost</p>
        <p className={css.productDescription}>Arnaud Comte AOP exlagrad opas
35% hardost</p>
      </li>
      <li className={css.productItem}>
        <img className={css.image} src={img} alt="" />
        <p className={css.productTitle}>Hardost</p>
        <p className={css.productDescription}>Arnaud Comte AOP exlagrad opas
35% hardost</p>
      </li>
      <li className={css.productItem}>
        <img className={css.image} src={img} alt="" />
        <p className={css.productTitle}>Hardost</p>
        <p className={css.productDescription}>Arnaud Comte AOP exlagrad opas
35% hardost</p>
      </li>
     </ul>
     
    </>
  )
}

export default ProductsList;
