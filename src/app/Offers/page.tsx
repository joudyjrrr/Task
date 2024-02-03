import React from "react";
import Offers from "../../../Pages/Offers/Offers";
import SideBar from "../../../Layout/SideBar";

const page = () => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <SideBar />
      <Offers />
    </div>
  );
};

export default page;
