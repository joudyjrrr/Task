"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import Tarch from "../../Assets/SVGs/Dashboard/Buttons/trash-01.svg";
import Edit from "../../Assets/SVGs/Dashboard/Buttons/edit-01.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Avatar from "../../Assets/SVGs/SingIn/Avatar.png";
import { Button } from "@/components/ui/button";
import dot from "../../Assets/SVGs/Dashboard/dots-vertical.svg";
import { Switch } from "@/components/ui/switch";
import DropDwon from "../../Components/DropDwon";
import { useRouter } from "next/navigation";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
const Tables = () => {
  const [openDrop, setOpenDrop] = useState<boolean>();
  const router = useRouter();
  const test = ["", "", "", "", ""];
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex w-full">
            <div className="flex flex-col flex-grow gap-5 items-startw-full">
              <Title
                Title="Items"
                SubTitle=" Organize, manage and add items in your kitchen"
                links={[{ Link: "/items", label: "Items" }]}
              />
            </div>
            <Button
              onClick={() => router.push("items/Add-item")}
              className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
                     text-gray-700 text-Text-sm font-md leading-5 
                     "
            >
              Add Item
            </Button>
          </div>

          <div className="flex flex-col gap-5   !rounded-xl border border-gray-200 shadow-sm w-full">
            <div className="w-full flex   items-start gap-5 !px-6 !pt-5">
              <p className="text-gray-900 text-lg font-semibold leading-6 flex-grow">
                Hamburgers
              </p>
              <Image src={dot} alt="" />
            </div>
            <Table className="w-full">
              <TableHead className="w-full flex px-0">
                <TableRow className="w-full flex justify-center bg-gray-50 border-b border-gray-200">
                  <TableHead className=" w-[16rem] flex h-10 py-3  items-center gap-3 !px-6 self-stretc ">
                    <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                      Name
                    </p>
                  </TableHead>
                  <TableHead className=" w-[28rem] flex h-10 py-3 px-6 items-center gap-3 self-stretch">
                    <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                      Ingredients
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                    <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                      Prcie
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch ">
                    <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                      Available
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
                </TableRow>
              </TableHead>
              <TableBody className="w-full bg-white">
                {test.map((d, index) => (
                  <TableRow
                    key={index}
                    className="flex justify-center bg-white h-20 border-b border-gray-200 "
                  >
                    <TableCell className=" flex basis-[27%]  h-20 items-center py-4 px-6 gap-3self-stretch gap-3">
                      <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                        <Image src={Avatar} alt="w-full" />
                      </div>
                      <p className="text-gray-900 text-sm leading-5 font-sm ">
                        Cheeseburger Combo
                      </p>
                    </TableCell>

                    <TableCell className="flex  flex-grow items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                      <p className="text-gray-600 text-sm leading-5 font-sm ">
                        Classic Cheeseburger, Medium Fries, Medium Soft Drink
                      </p>
                    </TableCell>
                    <TableCell className="flex items-center  h-20 gap-3 py-4 px-4   self-stretch ">
                      <p className="text-gray-900 text-sm leading-5 font-sm ">
                        $14.81
                      </p>
                    </TableCell>
                    <TableCell className="flex items-center  h-20 gap-3 py-4 px-6 ">
                      <Switch id="airplane-mode" checked />
                    </TableCell>

                    <TableCell className="flex items-center  h-20 gap-2 p-4   self-stretch ">
                      <Image src={Tarch} alt="" />
                      <Image src={Edit} alt="" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col gap-5 rounded-xl border border-gray-200 shadow-sm w-full relative">
            <div className="w-full flex items-start gap-5 px-6 pt-5">
              <p className="text-gray-900 text-lg font-semibold leading-6 flex-grow">
                Beverages
              </p>
              <Image
                src={dot}
                alt=""
                onClick={() => setOpenDrop((prev) => !prev)}
              />
              {openDrop && <DropDwon to="items/Edit-Category" />}
            </div>
            <Table className="w-full">
              <TableHeader className="w-full flex justify-center bg-gray-50 border-b border-gray-200">
                <TableRow className="w-full flex justify-center bg-gray-50 border-b border-gray-200">
                  <TableHead
                    colSpan={2}
                    className="w-[16rem] flex h-10 py-3 px-6 items-center gap-3 self-stretch"
                  >
                    <p className="text-gray-600 text-Text-xs font-sm leading-5">
                      Name
                    </p>
                  </TableHead>
                  <TableHead className="w-[28rem] flex h-10 py-3 px-6 items-center gap-3 self-stretch">
                    <p className="text-gray-600 text-Text-xs font-sm leading-5">
                      Ingredients
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                    <p className="text-gray-600 text-Text-xs font-sm leading-5">
                      Price
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch ">
                    <p className="text-gray-600 text-Text-xs font-sm leading-5">
                      Available
                    </p>
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full bg-white">
                {test.map((d, index) => (
                  <TableRow
                    key={index}
                    className="flex justify-center bg-white h-20 border-b border-gray-200"
                  >
                    <TableCell className="flex  basis-[27%] pl-6 pr-2 h-20 items-center py-4 gap-3 self-stretch">
                      <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                        <Image src={Avatar} alt="w-full" />
                      </div>
                      <p className="text-gray-900 text-sm leading-5 font-sm">
                        Refreshing Citrus Quench
                      </p>
                    </TableCell>

                    <TableCell className="flex flex-grow items-center h-20 gap-3 py-4 px-6 self-stretch">
                      <p className="text-gray-600 text-sm leading-5 font-sm">
                        Citrus Mint Iced Tea
                      </p>
                    </TableCell>
                    <TableCell className="flex items-center h-20 gap-3 py-4 px-4 self-stretch">
                      <p className="text-gray-900 text-sm leading-5 font-sm">
                        $14.81
                      </p>
                    </TableCell>
                    <TableCell className="flex items-center h-20 gap-3 py-4 px-6">
                      <Switch id="airplane-mode" checked />
                    </TableCell>

                    <TableCell className="flex items-center h-20 gap-2 p-4 self-stretch">
                      <Image src={Tarch} alt="" />
                      <Image src={Edit} alt="" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
