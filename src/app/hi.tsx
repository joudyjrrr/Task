import { Button } from "@/components/ui/button";

import SideBar from "./SideBar/page";
import Image from "next/image";
import Img from "../../Assets/SVGs/Dashboard/img1.jpg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import dot from "../../Assets/SVGs/Dashboard/dots-vertical.svg";
import ArrowUp from "../../Assets/SVGs/Dashboard/arrow-up.svg";
import { Input } from "@/components/ui/input";
import Ell from "../../Assets/SVGs/Dashboard/Ellipse 1075(1).svg";
export default function Home() {
  return (
    <>
      <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
        <SideBar />
        <div className="bg-gray-50 bg-cover bg-center px-[2.5rem] py-12  m-0 col-span-2">
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

          <div className="flex flex-col pb-8 gap-8 items-start mr-28 ">
            <div className="flex flex-col gap-5 items-start border-b pb-5 border-gray-300  w-full">
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

            <div className="flex  gap-4 h-[7.5rem] flex-1 border-b pb-5 border-gray-300  ">
              <div className="flex flex-col p-6 gap-5 w-[15rem] justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
                <div className="flex gap-16">
                  <p className=" text-gray-600 text-Text-sm font-sm leading-5">
                    Today’s Balance
                  </p>
                  <Image src={dot} alt="dot" className="w-5 h-5" />
                </div>
                <div className="flex gap-4">
                  <h1 className=" text-gray-900 w-[7rem] text-[1.5rem] font-md leading-8">
                    $1,843.82
                  </h1>
                  <div className="flex gap-1 text-center rounded-2xl border border-Success-200 bg-Success-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                    <Image src={ArrowUp} alt="Ar" className="w-5 h-5" />
                    <p className="text-Success-700 text-Text-sm font-sm leading-5">
                      56%
                    </p>
                  </div>
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
                  <div className="flex gap-1 text-center rounded-2xl border border-Success-200 bg-Success-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                    <Image src={ArrowUp} alt="Ar" className="w-5 h-5" />
                    <p className="text-Success-700 text-Text-sm font-sm leading-5">
                      56%
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 gap-5 justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
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

              <div className="flex flex-col p-6 gap-5  justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
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

            <div className="flex flex-col items-start gap-5  border-b pb-5 border-gray-300">
              <div className="flex">
                <div className="flex flex-col w-[42rem]">
                  <h1 className="text-gray-900 text-[1.125rem] font-md leading-7">
                    Active Orders
                  </h1>
                  <p className="px-2 text-gray-600 text-Text-sm font-xs  leading-5">
                    Orders from the oldest to the newest are listed
                  </p>
                </div>
                <Input
                  type="search"
                  placeholder="Search"
                  id="sr"
                  className="w-[20rem]"
                />
              </div>

              <div className="flex p-2 items-center gap-5 rounded-radius_lg border border-gray-200 bg-gray-50 ">
                <div className="flex h-[2.25rem] py-2 px-3 gap-2 items-center rounded-radius_sm bg-white shadow-sm">
                  <p className="text-gray-700 text-Text-sm font-md leading-5">
                    All
                  </p>
                  <div className="flex px-2 py-0.5 items-center rounded-radius_2xl border border-gray-200 bg-gray-50 ">
                    <p className="text-gray-700 text-Text-sm font-md leading-5">
                      5
                    </p>
                  </div>
                </div>

                <div className="flex h-[2.25rem] py-2 px-3 gap-2 items-center rounded-radius_sm  shadow-sm">
                  <p className="text-gray-700 text-Text-sm font-md leading-5">
                    New
                  </p>
                </div>

                <div className="flex h-[2.25rem] py-2 px-3 gap-2 items-center rounded-radius_sm  shadow-sm">
                  <p className="text-gray-700 text-Text-sm font-md leading-5">
                    Preparing
                  </p>
                </div>

                <div className="flex h-[2.25rem] py-2 px-3 gap-2 items-center rounded-radius_sm  shadow-sm">
                  <p className="text-gray-700 text-Text-sm font-md leading-5">
                    Ongoing
                  </p>
                </div>
                <div className="flex h-[2.25rem] py-2 px-3 gap-2 items-center rounded-radius_sm  shadow-sm">
                  <p className="text-gray-700 text-Text-sm font-md leading-5">
                    Cancelled
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4  flex-col justify-center">
              <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
                <div className="w-[2.5rem] h-[2.5rem] rounded-lg  border border-gray-100 bg-Gray-25 shadow-sm  ">
                  {" "}
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-400 text-Text-sm font-[440] leading-5">
                    #124952
                  </p>
                  <p className="text-gray-900 text-Text-sm font-[460] leading-5">
                    1 item(s)
                  </p>
                </div>
                <p className="text-gray-400 text-Text-sm font-[440] leading-5">
                  Arda M.
                </p>
                <div className="flex px-2 py-0.5 items-center rounded-radius_2xl border border-Success-200 bg-Success-50 ">
                  <p className="text-Success-700 text-[0.75rem] font-md leading-5">
                    New Customer
                  </p>
                </div>

                <div className="flex w-12 h-12 p-[0.46875rem] justify-center relative rounded-46.82813rem  ">
               
                  <div className="flex flex-col gap-[0.1875rem] absolute top-2 left-2 justify-center text-center">
                    <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                      2
                    </p>
                    <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                    </p>
                  </div>
                  <Image src={Ell} alt="img" className="w-12 h-12" />
                </div>
              </div>

              <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
                <div className="w-[2.5rem] h-[2.5rem] rounded-lg  border border-gray-100 bg-Gray-25 shadow-sm  ">
                  {" "}
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-400 text-Text-sm font-[440] leading-5">
                    #124952
                  </p>
                  <p className="text-gray-900 text-Text-sm font-[460] leading-5">
                    1 item(s)
                  </p>
                </div>
                <p className="text-gray-400 text-Text-sm font-[440] leading-5">
                  Arda M.
                </p>
                <div className="flex px-2 py-0.5 items-center rounded-radius_2xl border border-Success-200 bg-Success-50 ">
                  <p className="text-Success-700 text-[0.75rem] font-md leading-5">
                    New Customer
                  </p>
                </div>

                <div className="flex w-12 h-12 p-[0.46875rem] justify-center relative rounded-46.82813rem  ">
               
                  <div className="flex flex-col gap-[0.1875rem] absolute top-2 left-2 justify-center text-center">
                    <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                      2
                    </p>
                    <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                    </p>
                  </div>
                  <Image src={Ell} alt="img" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
