import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center fixed z-10 bg-[#ffffff] w-full py-3 px-12">
      <img src={logo} alt="food" />
      <div>
        <span className="text-[#FD9827]">Food</span>{" "}
        <span className="text-[#0000FF]">Mania</span>
      </div>
      <img src={profile} alt="profile" />
    </div>
  );
}

export default NavBar;
