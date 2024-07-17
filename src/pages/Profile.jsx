import React from "react";
import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex justify-center items-center"
    >
      Coming soon
    </motion.div>
  );
}

export default Profile;
