import { Input } from "@/components/ui/input";
import React from "react";
import Search from "../../../../../public/svg/input/search-lg.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Badge from "@/components/custom/Badge";
import ItemPng from "../../../../../public/Images/items.png";
import goldStar from "../../../../../public/svg/global/goldStar.svg";
import halfGoldStar from "../../../../../public/svg/global/halfGoldStar.svg";
import Star from "../../../../../public/svg/global/Star background(1).svg";
import check from "../../../../../public/svg/global/chek-circule.svg";

import { Button } from "@/components/ui/button";

const ActiveOrders = () => {
  return (
    <div className="flex flex-col items-start gap-5  w-full">
      <div className="flex w-full  border-b pb-5 border-gray-300">
        <div className="flex flex-col flex-grow">
          <h1 className="text-gray-900 text-[1.125rem] font-md leading-7">
            Active Orders
          </h1>
          <p className="px-2 text-gray-600 text-Text-sm font-xs  leading-5">
            Orders from the oldest to the newest are listed
          </p>
        </div>
        <div className="flex w px-[0.875rem] items-center gap-2 rounded-lg border border-gray-300 shadow-sm ">
          <img alt="Avatr" src={Search} className="w-5 h-5 " />
          <Input
            type="search"
            placeholder="Search in order name or number"
            id="sr"
            className=" border-none shadow-none !outline-none !focus:outline-none text-Gray-500 p-0"
          />
        </div>
      </div>
      <Tabs defaultValue="All" className="w-full flex flex-col gap-6">
        <TabsList className="w-full  bg-gray-50 rounded-[0.625rem] p-4 h-[3rem] flex gap-2 border border-gray-200 justify-start items-center">
          <TabsTrigger
            value="All"
            className="py-2 text-gray-500 items-center px-4 !rounded-md flex gap-2 font-md border-none shadow-sm my-2 text-sm  data-[state=active]:!text-gray-700 data-[state=active]:!bg-white "
          >
            All
            <p className="rounded-2xl px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-700 font-sm text-sm">
              12
            </p>
          </TabsTrigger>
          <TabsTrigger
            value="New"
            className="py-2 text-gray-500 items-center px-4 !rounded-md flex gap-2 font-md border-none shadow-sm my-2 text-sm  data-[state=active]:!text-gray-700 data-[state=active]:!bg-white "
          >
            New
          </TabsTrigger>
          <TabsTrigger
            value="Preparing"
            className="py-2 text-gray-500 items-center px-4 !rounded-md flex gap-2 font-md border-none shadow-sm my-2 text-sm  data-[state=active]:!text-gray-700 data-[state=active]:!bg-white "
          >
            Preparing
          </TabsTrigger>
          <TabsTrigger
            value="Ongoing"
            className="py-2 text-gray-500 items-center px-4 !rounded-md flex gap-2 font-md border-none shadow-sm my-2 text-sm  data-[state=active]:!text-gray-700 data-[state=active]:!bg-white "
          >
            Ongoing
          </TabsTrigger>
          <TabsTrigger
            value="Cancelled"
            className="py-2 text-gray-500 items-center px-4 !rounded-md flex gap-2 font-md border-none shadow-sm my-2 text-sm  data-[state=active]:!text-gray-700 data-[state=active]:!bg-white "
          >
            Cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="All"
          className="flex gap-4 border-b pb-5 border-gray-300"
        >
          <div className="flex gap-4  flex-col justify-center ">
            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex gap-2 items-center">
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
              </div>
              <Badge
                BgclassName=" border-Success-200 bg-Success-50 "
                textColor="text-Success-700"
                text="New Customer"
              />

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    2
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-Brand-200"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>

            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-Brand-600 bg-Brand-25 bg-opacity-50  ">
              <div className="flex gap-2 items-center">
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
              </div>
              <Badge
                BgclassName="border-Brand-200 bg-Brand-50 "
                textColor="text-Brand-700"
                text="Bad Experience"
              />

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    3
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-Brand-200"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>

            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex justify-between gap-2 items-center">
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
              </div>

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    7
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-Brand-200"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>

            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex justify-between gap-2 items-center">
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
              </div>

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    12
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-Brand-200"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>

            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex justify-between gap-2 items-center">
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
              </div>

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    12
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-gray-400"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>
            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex justify-between gap-2 items-center">
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
              </div>

              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    12
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-gray-400"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>
            <div className="flex p-4 justify-between w-[22.5rem] items-center rounded-radius_lg border border-gray-100 bg-white shadow-sm ">
              <div className="flex justify-between gap-2 items-center">
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
              </div>
              <div className="w-12 h-12 flex justify-center relative rounded-[50%] px-2 border-[1.5px] border-gray-300">
                <div className="flex flex-col gap-[0.1875rem]   justify-center items-center text-center">
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    12
                  </p>
                  <p className="text-gray-400 text-Text-sm font-[460] leading-[0.9375rem]">
                    min
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-[50%] border-[1.5px] border-gray-400"
                  style={{ clipPath: "circle(80% at 100% 50%)" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  rounded-[0.625rem] border border-gray-100 ">
            <img
              src={ItemPng}
              alt="item"
              className="w-[38.75rem] h-48   rounded-t-[0.625rem]"
            />
            <div className="flex flex-col px-8 justify-center items-start border w-full border-gray-100 rounded-b-[0.625rem]">
              <div className="flex py-8 gap-4 border-b border-gray-100 w-full ">
                <p className="text-gray-700 text-Text-sm font-md leading-5 flex-grow">
                  Order
                </p>
                <div className="flex px-[0.625rem] py-1 items-center rounded-lg border border-gray-300 shadow-sm ">
                  <p className="text-gray-700 text-Text-sm font-sm leading-5">
                    1x BBQ Burger
                  </p>
                </div>
                <div className="flex px-[0.625rem] py-1 items-center rounded-lg border border-gray-300 shadow-sm ">
                  <p className="text-gray-700 text-Text-sm font-sm leading-5">
                    Chicken Fries
                  </p>
                </div>
              </div>

              <div className="flex py-8 gap-4 border-b border-gray-100 w-full">
                <p className="text-gray-700 text-Text-sm font-md leading-5 flex-grow ">
                  Extras
                </p>
                <div className="flex px-[0.625rem] py-1 items-center rounded-lg border border-gray-300 shadow-sm ">
                  <p className="text-gray-700 text-Text-sm font-sm leading-5">
                    2x Extra Cheese
                  </p>
                </div>
              </div>

              <div className="flex py-8 gap-4 border-b border-gray-100 w-full">
                <p className="text-gray-700 text-Text-sm font-md leading-5  flex-grow">
                  Note
                </p>

                <p className="text-gray-700 text-Text-sm font-sm leading-5">
                  &quot;Can I please have extra pickles and a side of spicy mayo
                  with my hamburger order?&quot;
                </p>
              </div>

              <div className="flex py-8 gap-4 border-b border-gray-100 w-full">
                <p className="text-gray-700 text-Text-sm font-md leading-5  flex-grow">
                  Recent Rating
                </p>

                <div className="flex">
                  <img src={goldStar} alt="st" className="w-5 h-5" />
                  <img src={halfGoldStar} alt="st" className="w-5 h-5" />
                  <img src={Star} alt="st" className="w-5 h-5" />
                  <img src={Star} alt="st" className="w-5 h-5" />
                  <img src={Star} alt="st" className="w-5 h-5" />
                </div>
              </div>

              <div className="flex py-8 gap-4 border-b border-gray-100 w-full">
                <p className="text-gray-700 text-Text-sm font-md leading-5  flex-grow">
                  Date of Order
                </p>

                <p className="text-gray-800 text-Text-md font-[440] leading-6">
                  09/03/2023 – 18:56
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <div className="flex justify-between ">
          <div className="flex py-4 justify-start items-center gap-3 flex-shrink-0 w-[25rem]">
            <p className="text-gray-500 text-Text-sm font-sm leading-5 flex-1 ">
              Page 1 of 10
            </p>
            <div className="flex justify-end items-center gap-3 ">
              <Button className="border border-gray-300 text-gray-800 bg-white ">
                Previous
              </Button>
              <Button className="border border-gray-300 text-gray-800 bg-white">
                Next
              </Button>
            </div>
          </div>

          <div className="flex  justify-self-end items-center gap-1">
            <Button className="border border-gray-300 text-gray-800 bg-white">
              Reject
            </Button>
            <Button
              className="border text-white border-Brand-600 bg-Brand-600"
            >
              Accept
              <img src={check} className="w-4 h-4"/>
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ActiveOrders;
