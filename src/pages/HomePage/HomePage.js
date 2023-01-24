import React from "react";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectProducts } from "../../components/redux/productsSelector";
import SliderCustom from "../../components/Slider/Slider";

const HomePage = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      <h1 className={css.homePageTitle}>Home Page</h1>
      <SliderCustom products={products} />
    </div>
  );
};

export default HomePage;
