import React from "react";
import restaurant from "../assets/restaurant.png";
import cart from "../assets/cart.png";
import tracking from "../assets/tracking.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleclick = () => {
    console.log("hey");
  };

  return (
    <div className="fixed z-50 bottom-0 bg-[#ffffff] w-screen py-3 px-12 flex flex-row justify-evenly max-md:justify-between">
      <NavLink to="/">
        <button>
          <img src={restaurant} alt="restaurant" />
        </button>
      </NavLink>
      <NavLink to="/cart">
        <button>
          <img src={cart} alt="order" />
        </button>
      </NavLink>
      <NavLink to="/tracking">
        <button>
          <img src={tracking} alt="order" />
        </button>
      </NavLink>
    </div>
  );
}

export default Footer;
