import React from "react";
import Image from "next/image";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import Icon from "../../Assets/SVGs/Dashboard/Icon(3).svg";
import SideBar from "../../Layout/SideBar";
const PromotionDetails = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
    <SideBar />
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex flex-col flex-grow gap-5 items-start border-b border-gray-300 pb-5 w-full">
          <div className="flex items-center">
            <Image src={home} alt="home" className="w-5 h-5" />
            <Image src={RwoRight} alt="home" className="w-4 h-4" />
            <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
              Promotions
            </p>
            <Image src={RwoRight} alt="home" className="w-4 h-4" />
            <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
              Promotion Details
            </p>
          </div>

          <div>
            <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
              Promotion Details
            </h1>
            <p className="px-2 text-gray-500 text-Text-md font-xs leading-6">
              All promotions suggested by Humy
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-8 py-8 border-b border-gray-200">
          <p className="text-gray-700 font-md text-Text-sm leading-5 ">
            Promotion
          </p>
          <div>
            {" "}
            <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
              “Savor the savings! Get an appetizing 20% off on your next
              FlavorExpress order.
            </p>
            <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
              Happy dining!”
            </p>
          </div>
        </div>

        <div className="flex gap-8 py-8 border-b border-gray-200">
          <p className="text-gray-700 font-md text-Text-sm leading-5 ">
            Categories
          </p>
          <div className="flex gap-2">
            <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
              <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                Hamburgers
              </p>
            </div>
            <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
              <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                Beverages
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 py-8 border-b border-gray-200">
          <p className="text-gray-700 font-md text-Text-sm leading-5 ">
            End Time
          </p>
          <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
            09/03/2023 – 22:00
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PromotionDetails;
