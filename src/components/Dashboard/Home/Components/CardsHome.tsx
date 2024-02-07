import React from 'react'
import dot from "../../../../../public/svg/global/dots-vertical.svg"
import ArrowUp from "../../../../../public/svg/global/arrow-up.svg"

import Badge from '@/components/custom/Badge'
const CardsHome = () => {
  return (
    <div className="flex  gap-4  flex-1 border-b pb-5 border-gray-300  w-full">
    <div className="flex  flex-col p-[1.5rem] gap-5 w-[15rem] justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
      <div className="flex gap-14">
        <p className=" text-gray-600 text-Text-sm font-sm leading-5">
          Today’s Balance
        </p>
        <img src={dot} alt="dot" className="w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <h1 className=" text-gray-900 w-[7rem] text-[1.5rem] font-md leading-8">
          $1,843.82
        </h1>
        <Badge
          BgclassName=" border-Success-200 bg-Success-50 "
          textColor="text-Success-700"
          text="56%"
          src={ArrowUp}
        />
      </div>
    </div>

    <div className="flex flex-col p-6 gap-5 justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
      <div className="flex">
        <p className=" text-gray-600 text-Text-sm font-sm leading-5 flex-1">
          Today’s orders
        </p>
      </div>
      <div className="flex gap-4">
        <h1 className=" text-gray-900 text-[1.5rem] w-[7rem] font-md leading-8">
          152
        </h1>
        <Badge
          BgclassName=" border-Success-200 bg-Success-50 "
          textColor="text-Success-700"
          text="56%"
          src={ArrowUp}
        />
      </div>
    </div>

    <div className="flex flex-grow flex-col p-6 gap-5  justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
      <div className="flex">
        <p className=" text-gray-600 text-Text-sm font-sm leading-5 flex-1">
          Awaiting
        </p>
      </div>
      <div className="flex gap-4">
        <h1 className=" text-gray-900 text-[1.5rem] font-md leading-8">
          24
        </h1>
      </div>
    </div>

    <div className="flex flex-grow flex-col p-6 gap-5  justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
      <div className="flex">
        <p className=" text-gray-600 text-Text-sm font-sm leading-5 flex-1">
          In Progress
        </p>
      </div>
      <div className="flex gap-4">
        <h1 className=" text-gray-900 text-[1.5rem] font-md leading-8">
          8
        </h1>
      </div>
    </div>
  </div>
  )
}

export default CardsHome