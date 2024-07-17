import { CardActions, CardContent, Rating } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function RestaurantCard({ item }) {
  const { name, imageUrl } = item;
  return (
    <div className="border border-2 rounded-2xl ml-2 mr-2 h-full">
      <div className="w-full h-64 relative group">
        <div className="absolute inset-0 rounded-2xl z-0 duration-500 brightness-100 group-hover:brightness-50">
          <img
            src={imageUrl}
            alt="restaurant"
            className="object-cover object-center w-full h-full rounded-2xl"
          />
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute z-10 w-full h-full">
          <div className="flex flex-col justify-center items-center w-full h-full text-[#ffffff]">
            <CardContent>
              <div className="text-[32px]">{name}</div>
            </CardContent>
            <CardActions>
              <NavLink to="/menu">
                <button className="border border-1 py-2 px-4 rounded-2xl brightness-100 hover:brightness-75">
                  Click to Explore
                </button>
              </NavLink>
            </CardActions>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
