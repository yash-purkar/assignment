import React, { useState } from "react";
import "./hero.css";
import { HERO_IMG, HERO_IMG_SLIDER, CAROUSEL_IMAGES } from "../../constants";
import HERO_BRAND from "../../assets/brand.svg";
import { TbPoint } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";

export const Hero = () => {
  const [currentImg, setCurrentImage] = useState(0); // State to track current carousel image

  // Function to update carousel image
  const changeCarouselImage = (i) => {
    setCurrentImage(i);
  };
  return (
    <div>
      <div className="hero_container">
        <img
          className="hero_img"
          alt="hero_images"
          src={CAROUSEL_IMAGES[currentImg]}
        />
        <div className="brand_heading">
          <h4 className="hero_title">Sea La Vie</h4>
          <p>Alibaug, Maharashtra</p>
          <div className="hero_action">
            <img src={HERO_BRAND} alt="hero_action" width="100%" />
          </div>
        </div>
        <div className="carousel_tracker">
          <div className="flex">
            {CAROUSEL_IMAGES?.map((img, i) => {
              return (
                <span Key={i} onClick={() => changeCarouselImage(i)}>
                  {currentImg === i ? (
                    <TbPointFilled className="carousel_icon" />
                  ) : (
                    <TbPoint className="carousel_icon" />
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div className="brand_img_slider">
          <img src={HERO_IMG_SLIDER} />
          <div className="brand_img_slider_inner">
            <p>+12</p>
          </div>
        </div>
      </div>
    </div>
  );
};
