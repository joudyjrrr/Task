import React from "react";
import Logo from "../Assets/SVGs/SingIn/humy.svg";
import Group from "..//Assets/SVGs/SingIn/Group 110.svg";
import Serach from "../Assets/SVGs/Dashboard/search-lg.svg";
import Home from "../Assets/SVGs/Dashboard/home-line.svg";
import Suport from ".././Assets/SVGs/Dashboard/Image.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Avatar from "../Assets/SVGs/Dashboard/Avatar(1).png";
const page = () => {
  return (
    <div className="flex  auto-cols-auto  flex-col items-start gap-24 overflow-y-scroll  w-fit top-0 bg-white border-e border-gray-300">
      <div className="flex pt-8 flex-col gap-6  px-5">
        <div className="flex  gap-1 items-start">
          <Image alt="Avatr" src={Group} className="w-[1.76569rem] h-8 " />
          <Image alt="Avatr" src={Logo} className="w-[4.44856rem] h-6  mt-2" />
        </div>
        <Input type="search" placeholder="Search" id="sr" />
        <div className="flex flex-col px-4 gap-2 items-start ">
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
          <div className="flex px-3 py-2 gap-2">
            <Image alt="Avatr" src={Home} className="w-6 h-6" />
            <p className="text-gray-800 text-Text-md font-sm leading-6 ">
              Dashboard
            </p>
          </div>
        </div>

        <div id="footer" className="flex flex-col gap-6 px-3 pb-8 items-start ">
          <div className="flex flex-col px-4 gap-2 items-start ">
            <div className="flex px-3 py-2 gap-2">
              <Image alt="Avatr" src={Home} className="w-6 h-6" />
              <p className="text-gray-800 text-Text-md font-sm leading-6 ">
                Dashboard
              </p>
            </div>
            <div className="flex px-3 py-2 gap-2">
              <Image alt="Avatr" src={Home} className="w-6 h-6" />
              <p className="text-gray-800 text-Text-md font-sm leading-6 ">
                Dashboard
              </p>
            </div>
          </div>

          <div className="flex flex-col  py-7 px-4 gap-4 bg-gray-50">
            <div>
              <p className="text-gray-900 text-Text-sm font-md  leading-5 ">
                Do you need support?
              </p>
              <p className="text-gray-600 text-Text-sm font-sm  leading-5 ">
                For all your questions, you can
              </p>
              <p className="text-gray-600 text-Text-sm font-sm  leading-5 ">
                {" "}
                reach live support and get
              </p>
              <p className="text-gray-600 text-Text-sm font-sm  leading-5 ">
                assistance
              </p>
            </div>
            <Image alt="Avatr" src={Suport} className=" rounded-radius_sm " />
            <div className="flex gap-3">
              <p className="text-gray-400 text-Text-sm font-md  leading-5 ">
                Dismiss
              </p>
              <p className="text-Brand-700 text-Text-sm font-md  leading-5 ">
                Live Support
              </p>
            </div>
          </div>

          <div className="flex pt-6 pl-4 pr-2 gap-4 border-t border-t-gray-200 relative w-full">
            <Image
              alt="Avatr"
              src={Avatar}
              className=" rounded-[12.5rem] w-[2.5rem] h-[2.5rem] "
            />
            <div className="flex flex-col">
              <p className="text-gray-700 text-Text-sm font-md  leading-5 ">
                Olivia Rhye
              </p>
              <p className="text-gray-600 text-Text-sm font-xs  leading-5 ">
                Olivia Rhye
              </p>
            </div>
            <svg
              className="w-5 h-5 absolute right-0 bottom-3 rounded-radius_md"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
