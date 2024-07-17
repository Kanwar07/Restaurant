import React, { useContext } from "react";
import { alldata } from "../context/Context";
import ItemsCard from "../components/ItemsCard";

function Menu() {
  const { menuitems } = useContext(alldata);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-14">
        {menuitems.map((item) => {
          const { id } = item;
          return (
            <div key={id}>
              <ItemsCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
