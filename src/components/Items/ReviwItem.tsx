import Image from "next/image";
import React from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import Img from "../../Assets/SVGs/Dashboard/image 1.png";
import { Button } from "@/components/ui/button";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";

const ReviwItem = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start border-b border-gray-300 pb-5 w-full">
            <Title
              Title="Add Items"
              SubTitle=" Review your item before adding it"
              links={[
                { Link: "/items", label: "Items" },
                { Link: "/Add-item", label: "Add Item" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col rounded-md shadow-sm border border-gray-200">
              <div className="h-[17rem]">
                <Image
                  src={Img}
                  alt=""
                  className="w-full h-full rounded-tl-md rounded-tr-md "
                />
              </div>
              <div className="bg-gray-50 flex flex-col gap-1 p-4">
                <p className="text-gray-700 font-sm text-Text-md leading-6">
                  Savory Bacon Ranch Burger
                </p>
                <p className="text-gray-600 font-[440] text-Text-sm leading-5">
                  Flame-grilled beef patty, crispy baconi Swiss cheese, fresh
                  lettuce
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    Price
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    $19.90
                  </p>
                </div>
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    CATEGORY
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    Hamburgers
                  </p>
                </div>
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    SUBCATEGORY
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    Specialty Burgers
                  </p>
                </div>
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    PREPARING TIME
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    15 minuets
                  </p>
                </div>
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    CUISINE
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    American
                  </p>
                </div>
                <div className="flex p-4 border-b border-gray-200 ">
                  <p className="text-gray-400 font-sm  text-Text-xs flex-grow leading-6">
                    DISCOUNT
                  </p>
                  <p className="text-gray-900 font-sm  text-Text-md leading-6">
                    Npn
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button className="bg-Brand-600 text-white">Add Item</Button>
              <Button className="border border-gray-300">Back</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviwItem;
