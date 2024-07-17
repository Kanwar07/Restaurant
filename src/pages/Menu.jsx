import React, { useContext } from "react";
import { alldata } from "../context/Context";
import ItemsCard from "../components/ItemsCard";
import { motion } from "framer-motion";

function Menu() {
  const { menuitems } = useContext(alldata);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pb-20 pt-20">
        {menuitems.map((item) => {
          const { id } = item;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              key={id}
            >
              <ItemsCard item={item} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
