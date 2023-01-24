import React from "react";
import Slider from "react-slick";
import css from "./Slider.module.css";
import sliderIconRight from "../../images/sliderIconRight.svg";
import sliderIconLeft from "../../images/sliderIconLeft.svg";

import Product from "../Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Arrow(props) {
  let className = props.type === "next" ? css.nextArrow : css.prevArrow;
  const char =
    props.type === "next" ? (
      <img src={sliderIconRight} alt="" />
    ) : (
      <img src={sliderIconLeft} alt="" />
    );

    if(props.className.split(" ").includes("slick-disabled")){ return null}
    else{
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );}
}

export default function SliderCustom({products}) {
  
  const renderSlides = () => {
  return products.map(({ id, name, image, temperament }) => (
      <div className={css.productItemHome} key={id}>
        <Product
          name={name}
          image={image.url}
          temperament={temperament}
          imgHeight={"441px"}
          imgWidth={"421px"}
        />
      </div>
    ));

  }

  return (
    <div className={css.slider}>
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        slidesToShow={3}
        slidesToScroll={3}
        infinite={false}
        dots={false}
        responsive={[
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
        ]}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
