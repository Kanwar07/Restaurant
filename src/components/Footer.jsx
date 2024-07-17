import React from "react";
import restaurant from "../assets/restaurant.png";
import cart from "../assets/cart.png";
import tracking from "../assets/tracking.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed z-50 bottom-0 bg-[#ffffff] w-screen py-3 px-12 flex flex-row justify-evenly max-md:justify-between"
    >
      <NavLink to="/">
        <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
          <img src={restaurant} alt="restaurant" />
        </button>
      </NavLink>
      <NavLink to="/cart">
        <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
          <img src={cart} alt="order" />
        </button>
      </NavLink>
      <NavLink to="/tracking">
        <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
          <img src={tracking} alt="order" />
        </button>
      </NavLink>
    </motion.div>
  );
}

export default Footer;
