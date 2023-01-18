import React from 'react';
import css from './HomePage.module.css';
import SliderCustom from '../../components/Slider/Slider';




const HomePage = () => {




  return (
    <div>
      <h1 className={css.homePageTitle}>Home Page</h1>
      <SliderCustom />   
    </div>
  );
};

export default HomePage;
