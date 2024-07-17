import React, { createContext, useEffect, useState } from "react";
import mealdata from "../data/menuData.json";
import restaurantdata from "../data/restaurantData.json";

export const alldata = createContext();

function Context({ children }) {
  const [restaurant, setrestaurant] = useState([]);
  const [menuitems, setmenuitems] = useState([]);
  const [cartitems, setcartitems] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
      const dataWithQuantity = mealdata.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setmenuitems(dataWithQuantity);
      setrestaurant(restaurantdata);
    };
    fetchdata();
  }, []);
  return (
    <alldata.Provider
      value={{ menuitems, cartitems, setcartitems, restaurant }}
    >
      {children}
    </alldata.Provider>
  );
}

export default Context;
