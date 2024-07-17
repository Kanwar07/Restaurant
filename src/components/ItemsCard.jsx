import React, { useContext } from "react";
import { CardContent, CardActions, Rating } from "@mui/material";
import { alldata } from "../context/Context";

function ItemsCard({ item }) {
  const { name, image, rating, reviewCount } = item;
  const { cartitems, setcartitems } = useContext(alldata);

  const handlecart = () => {
    setcartitems([...cartitems, item]);
  };

  return (
    <>
      <div className="border border-2 rounded-2xl ml-2 mr-2 h-full">
        <div className="w-full h-64 relative group">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl z-0 duration-500 brightness-100 group-hover:brightness-50"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="opacity-0 group-hover:opacity-100 duration-500 absolute inset-0 z-10 flex flex-col justify-center items-center text-[#ffffff]">
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
              <CardActions className="grow flex flex-row justify-between">
                <button className="border border-1 py-2 px-4 rounded-2xl brightness-100 hover:brightness-75">
                  Details
                </button>
                <button
                  onClick={handlecart}
                  className="border border-1 py-2 px-4 rounded-2xl brightness-100 hover:brightness-75"
                >
                  Card
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
