import { Button } from "@/components/ui/button";

import SideBar from "./SideBar/page";
import Image from "next/image";
import Img from "../../Assets/SVGs/Dashboard/img1.jpg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";

export default function Home() {
  return (
    <>
      <div className="grid gap-0 grid-cols-[auto,1fr,1fr] auto-cols-min duration-500 ease-in-out transition-all">
        <SideBar />
        <div className="bg-gray-50 px-[2.5rem] py-12 h-screen col-span-2">
          <div className="flex items-start rounded-[0.75rem] bg-white shadow-sm mr-28 mb-12">
            <Image
              src={Img}
              alt="img"
              className="w-[14.9375rem] h-[10rem] rounded-tl-[0.75rem] rounded-bl-[0.75rem] object-cover"
            />
            <div className="flex flex-col p-6 gap-5">
              <div>
                <h1 className="text-gary-900 text-Text-lg font-md leading-7">
                  Do you want to reach more customers?
                </h1>
                <p className="text-gary-600 text-Text-sm font-sx leading-5">
                  Check out Humy's advertising plans and choose the one that
                  suits you best.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
                     text-gray-700 text-Text-sm font-md leading-5 
                     "
                >
                  Dismiss
                </Button>

                <Button
                  className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-Brand-600 bg-Brand-600 shadow-sm
                     !text-white text-Text-sm font-md leading-5 
                     "
                >
                  Chek out
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-start border-b pb-5 border-gray-300 mr-28">
            <div className="flex ">
              <Image src={home} alt="home" className="w-5 h-5" />
              <Image src={RwoRight} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
                Dashboard
              </p>
              <Image src={RwoRight} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-700 text-Text-sm font-md leading-5">
                Dashboard
              </p>
            </div>
            <div>
              <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
                Welcome back, Olivia
              </h1>
              <p className="text-gray-400 text-Text-md font-sm leading-6">
                Your current sales summary and activity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()
      <Button
        size={"sm"}
        className=""
      >
        Button
      </Button>
      <Button color="#FF0000" variant={"outline"}>
        Test
      </Button> */}
    </>
  );
}
