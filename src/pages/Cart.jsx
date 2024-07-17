import React, { useContext } from "react";
import { alldata } from "../context/Context";
import CartCard from "../components/CartCard";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Cart() {
  const { cartitems, combinefunction } = useContext(alldata);
  return (
    <>
      {cartitems.length > 0 ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-20 pt-20"
        >
          <NavLink to="/menu">
            {" "}
            <div className="w-full flex justify-center my-6">
              <button className="border border-1 border-[#000000] rounded-2xl py-2 px-6 bg-transparent hover:bg-[#D3D3D3]">
                Menu
              </button>
            </div>
          </NavLink>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {cartitems.map((item) => {
              const { id } = item;
              return (
                <div key={id}>
                  <CartCard item={item} />
                </div>
              );
            })}
          </div>
          <NavLink to="/tracking">
            {" "}
            <div className="w-full flex justify-center my-6">
              <button
                className="border border-1 border-[#000000] rounded-2xl py-2 px-6 bg-transparent hover:bg-[#D3D3D3]"
                onClick={combinefunction}
              >
                Confirm Order
              </button>
            </div>
          </NavLink>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen flex justify-center items-center"
        >
          Kindly add items to cart
        </motion.div>
      )}
    </>
  );
}

export default Cart;
