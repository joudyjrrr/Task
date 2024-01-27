import React from "react";
import CheckCircel from "../../../../Assets/SVGs/SingIn/check-circle.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full justify-center h-screen flex  p-0">
      <div className="flex  px-8 pb-12 flex-col pt-24 gap-8 max-w-[22.5rem] h-full">
        <div className="flex flex-col items-center text-center gap-6 self-stretch bg-header-forget-bassword bg-cover bg-center">
          <Image src={CheckCircel} alt="" className="" />
          <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
            Password reset
          </h1>
          <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
        </div>
        <Button className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm">
            Submit
          </Button>
          <a className="cursor-pointer w-full flex  justify-center items-center gap-[0.375rem]  text-gray-600 text-Text-sm font-md leading-5">
            <svg
              className="w-[1.25rem] h-[1.25rem]"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3332 10H4.6665M4.6665 10L10.4998 15.8333M4.6665 10L10.4998 4.16667"
                stroke="#475467"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to log in
          </a>
      </div>
    </div>
  );
};

export default page;
