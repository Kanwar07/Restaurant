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
        <div>name: {name}</div>
      </CardContent>
      <CardMedia component="img" image={image} alt="meal" />
      <CardContent>
        <div>servings: {servings}</div>
        <div>cuisine: {cuisine}</div>
        <div>tags: {tags}</div>
        <div>rating: {rating}</div>
        <div>reviewCount: {reviewCount}</div>
        <div>mealType: {mealType}</div>
      </CardContent>
      <CardActions>
        <NavLink to="/menu">
          <button className="border border-2 px-6 py-3 rounded-2xl">
            Check out more items
          </button>
        </NavLink>
      </CardActions>
    </div>
  );
}

export default DetailCard;
