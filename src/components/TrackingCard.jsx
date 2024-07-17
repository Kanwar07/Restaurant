import React from "react";
import { CardMedia, CardContent } from "@mui/material";

function TrackingCard({ item }) {
  const { image, name, quantity } = item;
  return (
    <>
      <div className="flex flex-row justify-start items-center border rounded-2xl ml-2 mr-2 h-full">
        <CardMedia
          image={image}
          alt="meal"
          className="h-full w-20 rounded-l-2xl"
        />
        <CardContent className="flex flex-col justify-between items-start h-full">
          <div>{name}</div>
          <div>Quantity: {quantity}</div>
        </CardContent>
      </div>
    </>
  );
}

export default TrackingCard;
