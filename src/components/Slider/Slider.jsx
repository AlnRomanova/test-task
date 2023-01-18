import React from "react";
import Slider from "react-slick";
import css from "./Slider.module.css";
import sliderIconRight from "../../images/sliderIconRight.svg";
import sliderIconLeft from "../../images/sliderIconLeft.svg";

import Products from "../Products";
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
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export default function CustomArrows({ products }) {
  const renderSlides = () =>
    products.slice(0, 8).map(({ id, nombre, linkImagen }) => (
      <div className={css.productItemHome} key={id}>
        <Products
          nombre={nombre}
          linkImagen={linkImagen}
          imgHeight={"441px"}
          imgWidth={"421px"}
        />
      </div>
    ));

  return (
    <div className={css.slider}>
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        slidesToShow={3}
        slidesToScroll={3}
        infinite={false}
        dots={false}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
