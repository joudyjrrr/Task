import React, { useState } from "react";
import info from "../../../public/svg/promotion/info-circle.svg";
import Title from "../custom/MultiSelect/Title";
import HumysPromotions from "./HumysPromotions";

const index = () => {
  return (
    <div className="flex flex-col gap-8 items-start w-full px-[2.4rem] py-[3rem]">
      <div className="flex flex-col flex-grow gap-5 items-start w-full">
        <Title
          Title="Promotions"
          SubTitle="All promotions suggested by Humy"
          links={[{ Link: "/promotions", label: "Promotions" }]}
        />
      </div>
      <div className="flex gap-6 items-center border-b border-gray-300 pb-5 w-full">
        <div className="border border-gray-200 rounded-md flex justify-center p-1">
          <img src={info} alt="home" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-2">
          <p className="text-Brand-300 font-md text-Text-sm leading-6">
            Promotions are irreversible{" "}
          </p>
          <p className="text-gray-600 font-xs text-Text-sm leading-6">
            Once you have joined the offer, it is not possible to withdraw it.
          </p>
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-1 ">
          <p className="text-gray-950 font-md text-Text-sm leading-6">
            Humy's promotions
          </p>
          <p className="text-gray-600 font-xs text-Text-sm leading-6">
            Humy's promotions for your kitchen
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 shadow-sm flex-grow relative">
          <HumysPromotions />
        </div>
      </div>
    </div>
  );
};

export default index;
