import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import { IoIosCall } from "react-icons/io";
import BRAND_SVG from "../../assets/brand.svg";
import LOGO_SVG from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <div>
        <div className="mb_view">
          <FaHome />
        </div>
        <div className="lg_view">
          <div className="lg_brand flex align-center">
            <img className="brand" src={BRAND_SVG} alt="brand" />
            <input placeholder="search for location, villa, facilities..." />
          </div>
        </div>
      </div>
      <div>
        <div className="mb_view">
          <CiSearch />
        </div>
        <div className="flex justify-center align-center gap-1 lg_view">
          <div className="flex align-center gap-05">
            <img className="logo" src={LOGO_SVG} alt="logo" />
            Saffron Stays
          </div>
          <div className="flex align-center gap-05">
            <IoIosCall /> +91 9856547785
          </div>
          <button className="login_action ">Login</button>
        </div>
      </div>
    </div>
  );
};
