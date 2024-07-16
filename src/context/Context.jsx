import React, { createContext, useEffect, useState } from "react";
import mealdata from "../data/menuData.json";

export const menudata = createContext();

function Context({ children }) {
  const [menuitems, setmenuitems] = useState([]);
  const [cartitems, setcartitems] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
      const dataWithQuantity = mealdata.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setmenuitems(dataWithQuantity);
    };
    fetchdata();
  }, []);
  return (
    <menudata.Provider value={{ menuitems, cartitems, setcartitems }}>
      {children}
    </menudata.Provider>
  );
}

export default Context;
