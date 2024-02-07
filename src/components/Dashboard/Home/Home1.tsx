import React from "react";
import Image from "next/image";
import Img from "../../../Assets/SVGs/Dashboard/img1.jpg";
import RwoRight from "../../../Assets/SVGs/Dashboard/chevron-right.svg";
import home from "../../../Assets/SVGs/Dashboard/home-line.svg";
import dot from "../../../Assets/SVGs/Dashboard/dots-vertical.svg";
import ArrowUp from "../../../Assets/SVGs/Dashboard/arrow-up.svg";
import { Input } from "@/components/ui/input";
import Ell from "../../../Assets/SVGs/Dashboard/Ellipse 1075(1).svg";
import EllGray from "../../../Assets/SVGs/Dashboard/Ellipse 1075(2).svg";
import Items from "../../../Assets/SVGs/Dashboard/items.png";
import Star1 from "../../../Assets/SVGs/Dashboard/goldStar.svg";
import Star2 from "../../../Assets/SVGs/Dashboard/halfGoldStar.svg";
import Star3 from "../../../Assets/SVGs/Dashboard/Star background(1).svg";
import { Button } from "@/components/ui/button";
import Search from "../../../Assets/SVGs/Dashboard/search-lg.svg";
import SideBar from "../../../Layout/SideBar";

const Home1 = () => {
  return (
    <div className="bg-gray-50 bg-cover bg-center px-[2.5rem] py-12   col-span-2 w-full">
      <div className="flex h-[10rem]  gap-8 items-start rounded-[0.75rem] bg-white shadow-sm mr-28 mb-12">
        <Image
          src={Img}
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

        <div className="flex  gap-4  flex-1 border-b pb-5 border-gray-300  w-full">
          <div className="flex  flex-col p-[1.5rem] gap-5 w-[15rem] justify-between bg-white items-start rounded-xl border border-gray-200 shadow-sm">
            <div className="flex gap-14">
              <p className=" text-gray-600 text-Text-sm font-sm leading-5">
                Today’s Balance
              </p>
              <Image src={dot} alt="dot" className="w-5 h-5" />
            </div>
            <div className="flex gap-4">
              <h1 className=" text-gray-900 w-[7rem] text-[1.5rem] font-md leading-8">
                $1,843.82
              </h1>
              <div className="flex gap-1 items-center justify-center   text-center rounded-2xl border border-Success-200 bg-Success-50  py-0.5 pr-[0.625rem] p pl-[0.5rem]">
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
              <div className="flex gap-1  items-center  text-center rounded-2xl border border-Success-200 bg-Success-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                <Image src={ArrowUp} alt="Ar" className="w-5 h-5" />
                <p className="text-Success-700 text-Text-sm font-sm leading-5">
                  56%
                </p>
              </div>
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

        <div className="flex flex-col items-start gap-5  border-b pb-5 border-gray-300 w-full">
          <div className="flex w-full ">
            <div className="flex flex-col flex-grow">
              <h1 className="text-gray-900 text-[1.125rem] font-md leading-7">
                Active Orders
              </h1>
              <p className="px-2 text-gray-600 text-Text-sm font-xs  leading-5">
                Orders from the oldest to the newest are listed
              </p>
            </div>
            <div className="flex w px-[0.875rem] items-center gap-2 rounded-lg border border-gray-300 shadow-sm ">
              <Image alt="Avatr" src={Search} className="w-5 h-5 " />
              <Input
                type="search"
                placeholder="Search in order name or number"
                id="sr"
                className=" border-none shadow-none !outline-none !focus:outline-none text-Gray-500 p-0"
              />
            </div>
          </div>

          <div className="flex p-2 items-center gap-5 rounded-radius_lg border border-gray-200 bg-gray-50 ">
            <div className="flex  py-2 px-3 gap-2 items-center rounded-radius_sm bg-white shadow-sm">
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
      </div>
      <div className=" flex gap-4 border-b pb-5 border-gray-300">
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
            <div className="flex px-2 py-0.5 items-center rounded-radius_2xl border border-Success-200 bg-Success-50 ">
              <p className="text-Success-700 text-[0.75rem] font-md leading-5">
                New Customer
              </p>
            </div>

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

            <div className="flex px-2 py-0.5 items-center rounded-radius_2xl border border-Brand-200 bg-Brand-50 ">
              <p className="text-Brand-700 text-[0.75rem] font-md leading-5">
                Bad Experience
              </p>
            </div>
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
          <Image
            src={Items}
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
                <Image src={Star1} alt="st" className="w-5 h-5" />
                <Image src={Star2} alt="st" className="w-5 h-5" />
                <Image src={Star3} alt="st" className="w-5 h-5" />
                <Image src={Star3} alt="st" className="w-5 h-5" />
                <Image src={Star3} alt="st" className="w-5 h-5" />
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
      </div>

      <div className="flex justify-between ">
        <div className="flex py-4 justify-start items-center gap-3 flex-shrink-0 w-[25rem]">
          <p className="text-gray-500 text-Text-sm font-sm leading-5 flex-1 ">
            Page 1 of 10
          </p>
          <div className="flex justify-end items-center gap-3 ">
            <Button
              className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
                     text-gray-700 text-Text-sm font-md leading-5 
                     "
            >
              Previous
            </Button>
            <Button
              className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
                     text-gray-700 text-Text-sm font-md leading-5 
                     "
            >
              Next
            </Button>
          </div>
        </div>

        <div className="flex  justify-self-end items-center gap-1">
          <Button
            className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
                     text-gray-700 text-Text-sm font-md leading-5 
                     "
          >
            Reject
          </Button>
          <Button
            className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-Brand-600 bg-Brand-600 shadow-sm
                     !text-white text-Text-sm font-md leading-5  gap-1
                     "
          >
            Accept
            <svg
              className="w-5 h-5 "
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_903_147)">
                <path
                  d="M6.25008 10L8.75008 12.5L13.7501 7.50002M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_903_147">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
