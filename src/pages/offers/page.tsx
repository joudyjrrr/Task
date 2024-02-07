import Offers from "@/components/_Offers/Offers";
import SideBar from "@/layout/SideBar";
import React from "react";






const page = () => {
  return (
    <div className="grid grid-cols-[auto,1fr]">
      <SideBar />
      <Offers />
    </div>
  );
};

export default page;
