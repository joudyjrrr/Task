import React from "react";
import PathComponent from "../../Components/PathComponent";

const Offers = () => {
  return (
    <div className="pt-12 pl-2">
      <div className=" flex flex-col gap-10">
        {/* first */}
        <div className="flex flex-col gap-6 border-b border-b-gray-200">
          <div className="flex flex-col px-16">
            <PathComponent links={[{ Link: "/Offers", label: "Offers" }]} />
            <div className="flex flex-col gap-1">
              <p className="text-Gray-950 leading-[38px] font-semibold text-Display-sm">
                Offers
              </p>
              <p className="font-[460] ">All offers created by you.</p>
            </div>
          </div>
        </div>
        {/* second */}
        <div></div>
      </div>
    </div>
  );
};

export default Offers;
