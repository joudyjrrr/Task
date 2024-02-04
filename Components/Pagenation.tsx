import React from "react";
import ArrwoRigth from "../Assets/SVGs/ArrwoRight.svg";
import ArrwoLeft from "../Assets/SVGs/ArrwoLeft.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Pagenation = () => {
  return (
    <div className=" flex justify-between w-full h-auto px-6 py-4  items-center gap-3 self-stretch border-t border-gray-200">
      <div className="flex  items-center flex-1 flex-grow-0 flex-shrink-0">
        <Button className="gap-1 border border-gray-300  bg-  shadow-sm text-gray-700">
          <Image src={ArrwoLeft} alt="" />
          Previous
        </Button>
      </div>
      <div className="flex mx-auto">
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_md bg-gray-50 p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">1</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">2</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">3</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">...</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">8</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">9</p>
        </div>
        <div className="flex w-10 h-10 text-center justify-center items-center rounded-radius_m p-2 flex-shrink-0 self-stretch ">
          <p className="text-gray-700 text-sm font-sm leading-3">10</p>
        </div>
      </div>
      <div className="flex  items-center flex-1 flex-grow-0 flex-shrink-0">
        <Button className="gap-1 border border-gray-300  bg-  shadow-sm text-gray-700">
          {" "}
          Next
          <Image src={ArrwoRigth} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Pagenation;
