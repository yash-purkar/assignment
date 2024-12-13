import "./hero.css";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { HERO_IMG, HERO_IMG_SLIDER } from "../../constants";
import HERO_BRAND from "../../assets/brand.svg"

export const Hero = () => {
  return (
    <div>
      <div className="hero_container">
        <img className="hero_img" alt="hero_images" src={HERO_IMG} />
        <div className="brand_heading">
          <h4 className="hero_title">Sea La Vie</h4>
          <p>Alibaug, Maharashtra</p>
          <div className="hero_action">
            <img src={HERO_BRAND} alt="hero_action" width="100%"/>
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
