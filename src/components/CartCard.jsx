import React, { useContext } from "react";
import { CardMedia, CardContent } from "@mui/material";
import { alldata } from "../context/Context";

function CartCard({ item }) {
  const { id, name, image, quantity } = item;
  const { updateQuantity } = useContext(alldata);
  return (
    <>
      <div className="flex flex-row justify-between items-center border rounded-2xl ml-2 mr-2 h-full">
        <CardMedia
          image={image}
          alt="meal"
          className="h-full w-full rounded-l-2xl"
        />
        <CardContent>
          <div>{name}</div>
        </CardContent>
        <CardContent className="flex flex-row">
          <button
            className="pr-4"
            onClick={() => updateQuantity(quantity - 1, id)}
          >
            -
          </button>
          <div>{quantity}</div>
          <button
            className="pl-4"
            onClick={() => updateQuantity(quantity + 1, id)}
          >
            +
          </button>
        </CardContent>
      </div>
    </>
  );
}

export default CartCard;
