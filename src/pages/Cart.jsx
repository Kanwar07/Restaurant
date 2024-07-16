import React, { useContext } from "react";
import { menudata } from "../context/Context";
import CartCard from "../components/CartCard";

function Cart() {
  const { cartitems, setcartitems } = useContext(menudata);
  return (
    <>
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
    </>
  );
}

export default Cart;
