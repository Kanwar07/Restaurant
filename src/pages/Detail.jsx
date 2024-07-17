import React, { useContext } from "react";
import { alldata } from "../context/Context";
import DetailCard from "../components/DetailCard";

function Detail() {
  const { detail } = useContext(alldata);
  return (
    <>
      <div className="ml-2 mr-2 h-full pb-20 pt-20">
        <DetailCard detail={detail} />
      </div>
    </>
  );
}

export default Detail;
