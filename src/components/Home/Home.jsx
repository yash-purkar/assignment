import "./home.css";
import { Hero } from "../Hero/Hero";
import { Features } from "../Features/Features";
import { About } from "../About/About";
import { Amenities } from "../Amenities/Amenities";
import { Meals } from "../Meals/Meals";
import { RealMoments } from "../RealMoments/RealMoments";
import { Location } from "../Location/Location";
import { RoomsAndBeds } from "../RoomsAndBeds/RoomsAndBeds";
import { Footer } from "../Footer/Footer";
import { AvailabilityHero } from "../AvailabilityHero/AvailabilityHero";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex">
      <div className="home_inner_container flex flex-col">
        <Features />
        <About />
        <Amenities />
        <Meals />
        <RealMoments />
        <Location />
        <RoomsAndBeds />
      </div>
      <AvailabilityHero/>
      </div>
      <Footer />
    </>
  );
};
