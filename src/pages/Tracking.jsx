import React, { useContext } from "react";
import tick from "../assets/tick.svg";
import { alldata } from "../context/Context";
import TrackingCard from "../components/TrackingCard";
import { motion } from "framer-motion";

function Tracking() {
  const { orderdata, countdown } = useContext(alldata);
  return (
    <>
      {orderdata.length > 0 ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-20 pt-20"
        >
          <div className="flex justify-center w-full my-8">
            <img src={tick} alt="tick" />
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {orderdata.map((item) => {
              const { id } = item;
              return (
                <div key={id}>
                  <TrackingCard item={item} />
                </div>
              );
            })}
          </div>
          {countdown !== 0 ? (
            <div className="my-8 w-full flex justify-center">
              Order will arrive in {countdown} seconds
            </div>
          ) : (
            <div className="my-8 w-full flex justify-center">Order arrived</div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen flex justify-center items-center"
        >
          Kindly confirm order to track
        </motion.div>
      )}
    </>
  );
}

export default Tracking;
