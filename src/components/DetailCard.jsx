import React from "react";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

function DetailCard({ detail }) {
  const {
    name,
    servings,
    cuisine,
    tags,
    image,
    rating,
    reviewCount,
    mealType,
  } = detail;

  return (
    <div className="border rounded-2xl">
      <CardContent>
        <div className="text-[26px] font-bold flex justify-center">{name}</div>
      </CardContent>
      <CardMedia component="img" image={image} alt="meal" />
      <CardContent>
        <div className="flex flex-row flex-wrap">
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            Servings: {servings}
          </div>
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            {cuisine}
          </div>
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            <div className="flex flex-row gap-2">
              {tags.map((tag) => {
                return <div>{tag}</div>;
              })}
            </div>
          </div>
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            {rating}
          </div>
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            Review-Count: {reviewCount}
          </div>
          <div className="border border-1 py-2 px-4 border-[#FD9827] rounded-2xl bg-[#FD9827] text-[#ffffff] font-medium mr-2 mb-2">
            {mealType}
          </div>
        </div>
      </CardContent>
      <CardActions>
        <NavLink to="/menu">
          <button className="border border-2 border-[#000000] px-6 py-3 rounded-2xl">
            Check out more items
          </button>
        </NavLink>
      </CardActions>
    </div>
  );
}

export default DetailCard;
