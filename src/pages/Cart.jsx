import React, { useContext } from "react";
import { alldata } from "../context/Context";
import CartCard from "../components/CartCard";

function Cart() {
  const { cartitems } = useContext(alldata);
  return (
    <>
      {cartitems.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pb-10">
          {cartitems.map((item) => {
            const { id } = item;
            return (
              <div key={id}>
                <CartCard item={item} />
              </div>
            );
          })}
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
