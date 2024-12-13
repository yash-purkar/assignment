import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import LOGO_SVG from "../../assets/logo.svg";
export const Footer = () => {
  return (
    <div>
      <div className="footer flex flex-col gap-1">
        <div className="footer_logo_mb flex gap-05">
          <img src={LOGO_SVG} alt="footer_logo" />
          <div>
            <h3>SaffronStays</h3>
            <small>where families bond</small>
          </div>
        </div>
        <div className="flex footer_section flex-col gap-05">
          <h4>Company</h4>
          <p>SaffronStays</p>
          <p>Signature</p>
          <p>XSeries</p>
          <p>About</p>
        </div>
        <div className="flex footer_section flex-col gap-05">
          {" "}
          <h4>Contact</h4>
          <p>mail@saffronstays.com</p>
          <p>+91 3728253727</p>
          <p>Contact us</p>
          <p>Contact to Partner</p>
        </div>

        <div className="flex footer_section flex-col gap-05">
          {" "}
          <h4>Partner with us</h4>
          <p>SaffronStays</p>
          <p>Signature</p>
          <p>XSeries</p>
          <p>About</p>
        </div>
        <div className="flex footer_section flex-col gap-05">
          {" "}
          <h4>Policies</h4>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Cancellation Policy</p>
        </div>
      </div>
      <div className="flex flex-col align-center footer_social gap-1 footer_social_lg">
        <small>
          © {new Date().getFullYear()} SaffronStays. All rights reserved
        </small>
        <div className="flex gap-1">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaPinterestP />
          <IoLogoGoogleplus />
        </div>
      </div>

      <div className="availability_footer flex justify-between align-center">
        <div className="flex flex-col gap-05">
          <small className="line-through text-secondary">₹1,49,086</small>
          <p>
            <span className="font-bold ">₹1,00,086</span>/Night
          </p>
        </div>
        <div>
          <button className="availability_action">Check Availability</button>
        </div>
      </div>
    </div>
  );
};
