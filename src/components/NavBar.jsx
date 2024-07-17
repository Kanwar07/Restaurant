import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-evenly max-md:justify-between items-center z-50 fixed bg-[#ffffff] w-full py-3 px-12"
    >
      <NavLink to="/">
        <img
          src={logo}
          alt="food"
          className="cursor-pointer bg-transparent hover:bg-[#D3D3D3] p-2 rounded-full duration-200"
        />
      </NavLink>
      <NavLink to="/">
        <div className="cursor-pointer">
          <span className="text-[#FD9827]">Food</span>{" "}
          <span className="text-[#0000FF]">Mania</span>
        </div>
      </NavLink>
      <NavLink to="/profile">
        <img
          src={profile}
          alt="profile"
          className="cursor-pointer bg-transparent hover:bg-[#D3D3D3] p-2 rounded-full duration-200"
        />
      </NavLink>
    </motion.div>
  );
}

export default NavBar;
