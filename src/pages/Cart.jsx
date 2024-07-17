import React, { useContext } from "react";
import { alldata } from "../context/Context";
import CartCard from "../components/CartCard";
import { NavLink } from "react-router-dom";

function Cart() {
  const { cartitems } = useContext(alldata);
  return (
    <>
      {cartitems.length > 0 ? (
        <div className="pb-16 pt-16">
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
            <div className="w-full flex justify-center my-2">
              <button className="border border-1 border-[#000000] rounded-2xl py-2 px-6 bg-transparent hover:bg-[#D3D3D3]">
                Confirm Order
              </button>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          Kindly add items to cart
        </div>
      )}
    </>
  );
}

export default Cart;
