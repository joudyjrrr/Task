import Image from "next/image";
import React from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import Cale from "../../Assets/SVGs/Dashboard/Icon(4).svg";
import Add from "../../Assets/SVGs/Dashboard/Icon(5).svg";
import { Button } from "@/components/ui/button";
const Coupons = () => {
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
          <Button className="border border-gray-300  text-gray-700 ">
            {" "}
            <Image src={Add} alt="" className="w-4 h-4" /> Add coupons
          </Button>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      DELICIOUS
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <Image src={Cale} alt="" className="w-3 h-3" />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm ">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-500 font-sm text-Text-sm leading-5">
                      DELICIOUS
                    </p>
                    <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" />
                </div>
                <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <Image src={Cale} alt="" className="w-3 h-3" />
                <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      HUMY
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <Image src={Cale} alt="" className="w-3 h-3" />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      happy
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <Image src={Cale} alt="" className="w-3 h-3" />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      WELCOME
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <Image src={Cale} alt="" className="w-3 h-3" />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
