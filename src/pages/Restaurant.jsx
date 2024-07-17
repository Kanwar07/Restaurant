import React, { useContext } from "react";
import { alldata } from "../context/Context";
import RestaurantCard from "../components/RestaurantCard";
import { motion } from "framer-motion";

const Restaurant = () => {
  const { restaurant } = useContext(alldata);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-20 pb-20">
        {restaurant.map((item) => {
          const { id } = item;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              key={id}
            >
              <RestaurantCard item={item} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Restaurant;
