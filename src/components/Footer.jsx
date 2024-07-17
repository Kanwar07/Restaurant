import React, { useContext } from "react";
import restaurant from "../assets/restaurant.png";
import tracking from "../assets/tracking.png";
import cart from "../assets/cart.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { alldata } from "../context/Context";

function Footer() {
  const { orderdata } = useContext(alldata);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed z-50 bottom-0 bg-[#ffffff] w-screen py-2 px-12 flex flex-row justify-evenly max-md:justify-between"
    >
      <NavLink to="/">
        <div className="flex flex-col items-center">
          <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
            <img src={restaurant} alt="restaurant" />
          </button>
          <div className="text-[12px] opacity-60 font-semibold">Delivery</div>
        </div>
      </NavLink>
      {orderdata.length > 0 ? (
        <NavLink to="/tracking">
          <div className="flex flex-col items-center">
            <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
              <img src={tracking} alt="tracking" />
            </button>
            <div className="text-[12px] opacity-60 font-semibold">Order</div>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/cart">
          <div className="flex flex-col items-center">
            <button className="bg-transparent hover:bg-[#D3D3D3] p-2 rounded-xl duration-200">
              <img src={cart} alt="order" />
            </button>
            <div className="text-[12px] opacity-60 font-semibold">Cart</div>
          </div>
        </NavLink>
      )}
    </motion.div>
  );
}

export default Footer;
