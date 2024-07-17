import React, { useContext } from "react";
import { alldata } from "../context/Context";
import DetailCard from "../components/DetailCard";
import { motion } from "framer-motion";

function Detail() {
  const { detail } = useContext(alldata);
  console.log(detail);
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        className="ml-2 mr-2 h-full pb-20 pt-20"
      >
        <DetailCard detail={detail} />
      </motion.div>
    </>
  );
}

export default Detail;
