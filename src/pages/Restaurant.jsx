import React, { useContext } from "react";
import { alldata } from "../context/Context";
import RestaurantCard from "../components/RestaurantCard";

const Restaurant = () => {
  const { restaurant } = useContext(alldata);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-14 pb-16">
        {restaurant.map((item) => {
          const { id } = item;
          return (
            <div key={id}>
              <RestaurantCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Restaurant;
