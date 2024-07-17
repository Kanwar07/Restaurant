import React, { useContext } from "react";
import { alldata } from "../context/Context";
import DetailCard from "../components/DetailCard";

function Detail() {
  const { detail } = useContext(alldata);
  return (
    <>
      <div className="ml-2 mr-2 h-full mb-16 pt-16">
        <DetailCard detail={detail} />
      </div>
    </>
  );
}

export default Detail;
