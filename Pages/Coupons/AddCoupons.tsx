import React from "react";
import Image from "next/image";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
const AddCoupons = () => {
  return (
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex w-full">
          <div className="flex flex-grow flex-col  gap-5 items-start border-b border-gray-300 pb-5 w-full">
            <div className="flex items-center">
              <Image src={home} alt="home" className="w-5 h-5" />
              <Image src={RwoRight} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
                Coupons
              </p>
            </div>

            <div>
              <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
                Coupons
              </h1>
              <p className="px-2 text-gray-500 text-Text-md font-xs leading-6">
                All coupons created by you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoupons;
