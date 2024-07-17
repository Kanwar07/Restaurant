import React, { useContext } from "react";
import { CardContent, CardActions, Rating } from "@mui/material";
import { alldata } from "../context/Context";
import { NavLink } from "react-router-dom";

function ItemsCard({ item }) {
  const { id, name, image, rating, reviewCount } = item;
  const { handledetail, addcart } = useContext(alldata);

  return (
    <>
      <div className="border border-2 rounded-2xl ml-2 mr-2 h-full">
        <div className="w-full h-64 relative group">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl z-0 duration-500 brightness-50"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="opacity-100 duration-500 absolute inset-0 z-10 flex flex-col justify-center items-center text-[#ffffff]">
            <div className="flex flex-col justify-between h-full">
              <CardContent className="grow flex flex-col justify-evenly">
                <div className="text-[26px] font-semibold">{name}</div>
                <div className="flex flex-row items-center">
                  <Rating
                    name="read-only"
                    value={rating}
                    precision={0.5}
                    size="small"
                    readOnly
                    className="mr-4"
                  />
                  <div>{reviewCount} Reviews</div>
                </div>
              </CardContent>
              <CardActions className="grow flex flex-row justify-center">
                <NavLink to="/detail">
                  <button
                    onClick={() => handledetail(item)}
                    className="border border-2 py-2 px-4 rounded-2xl brightness-100 hover:brightness-75 font-bold mr-20"
                  >
                    Details
                  </button>
                </NavLink>
                <button
                  onClick={() => addcart(item, id)}
                  className="border border-2 py-2 px-4 rounded-2xl brightness-100 hover:brightness-75 font-bold"
                >
                  Cart
                </button>
              </CardActions>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsCard;
