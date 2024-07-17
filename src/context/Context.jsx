import React, { createContext, useEffect, useState } from "react";
import mealdata from "../data/menuData.json";
import restaurantdata from "../data/restaurantData.json";
import toast from "react-hot-toast";

export const alldata = createContext();

function Context({ children }) {
  const [restaurant, setrestaurant] = useState([]);
  const [menuitems, setmenuitems] = useState([]);
  const [cartitems, setcartitems] = useState([]);
  const [orderdata, setorderdata] = useState([]);
  const [detail, setdetail] = useState({});
  const [countdown, setcountdown] = useState(null);

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

  useEffect(() => {
    let timer;
    if (countdown !== null && countdown > 0) {
      timer = setInterval(() => {
        setcountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const startcountdown = (time) => {
    setcountdown(time);
  };

  const handledetail = (item) => {
    setdetail(item);
  };

  const addcart = (item, id) => {
    let itemExists = cartitems.some((cartItem) => cartItem.id === id);
    if (itemExists) {
      toast("Kindly increase the quantity in Cart", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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

  const combinefunction = () => {
    startcountdown(30);
    setorderdata(cartitems);
    setcartitems([]);
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
        countdown,
        startcountdown,
        combinefunction,
        orderdata,
      }}
    >
      {children}
    </alldata.Provider>
  );
}

export default Context;
