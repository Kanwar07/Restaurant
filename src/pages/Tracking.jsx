import React, { useContext } from "react";
import tick from "../assets/tick.svg";
import { alldata } from "../context/Context";
import TrackingCard from "../components/TrackingCard";

function Tracking() {
  const { cartitems } = useContext(alldata);
  return (
    <>
      {cartitems.length > 0 ? (
        <div className="pb-16 pt-16">
          <div className="flex justify-center w-full my-8">
            <img src={tick} alt="tick" />
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {cartitems.map((item) => {
              const { id } = item;
              return (
                <div key={id}>
                  <TrackingCard item={item} />
                </div>
              );
            })}
          </div>
          <div className="my-8 w-full flex justify-center">
            Order will arrive in 30 minutes
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          Kindly add items to track
        </div>
      )}
    </>
  );
}

export default Tracking;
