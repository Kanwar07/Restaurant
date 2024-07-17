import React, { createContext, useEffect, useState } from "react";
import mealdata from "../data/menuData.json";
import restaurantdata from "../data/restaurantData.json";
import toast from "react-hot-toast";

export const alldata = createContext();

function Context({ children }) {
  const [restaurant, setrestaurant] = useState([]);
  const [menuitems, setmenuitems] = useState([]);
  const [cartitems, setcartitems] = useState([]);
  const [detail, setdetail] = useState({});

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

  const handledetail = (item) => {
    setdetail(item);
  };

  const addcart = (item, id) => {
    let itemExists = cartitems.some((cartItem) => cartItem.id === id);
    if (itemExists) {
      toast.error("Item Already in Cart");
    } else {
      setcartitems([...cartitems, item]);
    }
  };

  const removecart = (id) => {
    let updatedcart = cartitems.filter((item) => item.id !== id);
    setcartitems(updatedcart);
  };

  const updateQuantity = (value, id) => {
    if (value === 0) {
      removecart(id);
    } else {
      let updateditem = cartitems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      );
      setcartitems(updateditem);
    }
  };
  return (
    <alldata.Provider
      value={{
        menuitems,
        cartitems,
        restaurant,
        detail,
        handledetail,
        addcart,
        removecart,
        updateQuantity,
      }}
    >
      {children}
    </alldata.Provider>
  );
}

export default Context;
