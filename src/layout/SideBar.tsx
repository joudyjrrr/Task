import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../components/custom/MultiSelect/SearchInput";
import NavList from "./nav/NavList";
import { firstNavConfig, secondNavConfig } from "./nav/config";
import { Button } from "../components/ui/button";

const SideBar = () => {
  return (
    <div className="flex flex-col flex-shrink gap-6 border w-[280px] border-r-gray-200">
      {/* first */}
      <div className="flex flex-col justify-between gap-6 pt-8 w-full">
        <span className="flex px-6">
          <Link to={"/"} className="flex justify-between gap-3">
            <img src={""} alt="avatar" />
            <img src={""} alt="logo" />
          </Link>
          <div></div>
        </span>
        <span className="px-3">
          <SearchInput />
        </span>
        <div className="flex flex-col justify-start  px-4 gap-1">
          <NavList navListData={firstNavConfig} />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-6 px-4 pb-8 w-fit">
        <div className="w-full">
          <NavList navListData={secondNavConfig} />
        </div>
        <div className="flex flex-col justify-between items-start gap-4 py-5 px-4  rounded-lg bg-gray-50 ">
          <div className=" flex flex-col gap-1 w-full">
            <div className="flex justify-between text-gray-900 font-semibold leading-5 text-Text-sm">
              <p className="flex justify-center items-center">
                Do you need support?
              </p>
              <button className="border-none shadow-none p-0 flex items-start">
                <img src={"/"} alt="cancel" />
              </button>
            </div>
            <p className="text-gray-600 font-normal text-Text-sm leading-5 w-[216px] break-words">
              For all your questions, you can reach live support and get
              assistance.
            </p>
          </div>
          <img src={"/"} alt="Support" className="rounded-md w-[260px]" />
          <div className="flex items-center justify-between gap-3">
            <Button className="bg-transparent  !border-none shadow-none p-0">
              <p className="text-gray-400 text-Text-sm font-semibold leading-5">
                Dismiss
              </p>
            </Button>
            <Link
              to={"/"}
              className="text-Brand-700 font-semibold leading-5 text-Text-sm"
            >
              Live Support
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="border-t flex relative border-t-gray-200 pt-6 pr-8 pb-0 pl-2 w-full gap-4">
          <div className="gap-3 flex ">
            <img src={""} alt="avatart" className="w-10 h-10 rounded-full" />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-700 font-semibold leading-5 text-Text-sm">
              Olivia Rhye
            </p>
            <p className="text-gray-600 leading-5 font-normal text-Text-sm">
              olivia@untitledui.com
            </p>
            <Button className="border-none shadow-none absolute top-[calc(50%-7.5px)] right-0 p-0 flex items-start">
              <img src={""} alt="sign out" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
