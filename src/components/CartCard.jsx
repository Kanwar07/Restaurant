import React from "react";
import { CardMedia, CardContent } from "@mui/material";

function CartCard({ item }) {
  const {
    name,
    servings,
    cuisine,
    tags,
    image,
    rating,
    reviewCount,
    mealType,
    quantity,
  } = item;
  return (
    <>
      <div className="border rounded-2xl ml-2 mr-2 h-[100%]">
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
          <div>Quantity: {quantity}</div>
        </CardContent>
      </div>
    </>
  );
}

export default CartCard;
