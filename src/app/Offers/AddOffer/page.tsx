import React from "react";

import SideBar from "../../../../Layout/SideBar";
import AddOffer from "../../../../Pages/Offers/AddOffer/AddOffer";


const page = () => {
  return (
    <div className="flex">
      <SideBar />
      <AddOffer />
    </div>
  );
};

export default page;
