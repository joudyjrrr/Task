import React from 'react'
import imgSubbort from "../../../../../public/Images/img1.jpg";
import { Button } from "@/components/ui/button";
const CardSupport = () => {
  return (
    <div className="flex h-[10rem]  gap-8 items-start rounded-[0.75rem] bg-white shadow-sm mr-28 mb-12">
    <img
      src={imgSubbort}
      alt="img"
      className="h-full basis-[24%] rounded-tl-[0.75rem] rounded-bl-[0.75rem]"
    />
    <div className="flex flex-col p-6 gap-5">
      <div>
        <h1 className="text-gary-900 text-Text-lg font-md leading-7">
          Do you want to reach more customers?
        </h1>
        <p className="text-gary-600 text-Text-sm font-sx leading-5">
          Check out Humy&apos;s advertising plans and choose the one that
          suits you best.
        </p>
      </div>
      <div className="flex gap-3">
        <Button className="bg-white border border-gray-200 text-gray-800">
          Dismiss
        </Button>

        <Button className="bg-Brand-600 border border-Brand-600 ">
          Chek out
        </Button>
      </div>
    </div>
  </div>
  )
}

export default CardSupport