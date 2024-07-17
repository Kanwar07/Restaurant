import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row justify-evenly max-md:justify-between items-center fixed z-50 bg-[#ffffff] w-full py-3 px-12">
      <NavLink to="/">
        <img src={logo} alt="food" className="cursor-pointer" />
      </NavLink>
      <NavLink to="/">
        <div className="cursor-pointer">
          <span className="text-[#FD9827]">Food</span>{" "}
          <span className="text-[#0000FF]">Mania</span>
        </div>
      </NavLink>
      <NavLink to="/profile">
        <img src={profile} alt="profile" className="cursor-pointer" />
      </NavLink>
    </div>
  );
}

export default NavBar;
