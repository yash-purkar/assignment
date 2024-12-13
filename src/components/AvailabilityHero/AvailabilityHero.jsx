import { SlCalender } from "react-icons/sl";
import "./availabilityHero.css";

import React from "react";
import { FaUser } from "react-icons/fa";

export const AvailabilityHero = () => {
  return (
    <div className="availability_main">
      <div className="flex-col gap-1 lg_availability_container">
        <div className="lg_availability_inner_container">
          <div className="flex prices gap-05">
            <small className="line-through text-secondary">₹1,49,086</small>
            <div className="flex">
              <h3 className="font-bold ">₹1,00,086</h3>/Night
            </div>
          </div>

          {/* Unlock price btn */}
          <div className="check_price_container">
            <div className="flex justify-between align-center">
              <p>Special discounts available!!</p>
              <button className="cursor-pointer">Unlock Price</button>
            </div>
          </div>

          {/* Date input */}
          <div className="flex align-center gap-05 date_picker">
            <SlCalender />
            <input className="input" type="date" />
          </div>
          {/* Guests input */}
          <div className="flex align-center gap-05 guests_input">
            <FaUser />
            <input className="input" type="number" placeholder="2 Guests" />
          </div>
        </div>
        {/* Action */}
        <button className="check_availability_action">
          Check Availability
        </button>
      </div>
    </div>
  );
};
