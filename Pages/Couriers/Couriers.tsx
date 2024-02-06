"use client";
import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
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
import Add from "../../Assets/SVGs/Dashboard/Add.svg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Couriers = () => {
  const router = useRouter();
  const test = ["", "", "", "", ""];
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <div className="flex flex-grow w-full">
              <Title
                Title="Couriers"
                SubTitle="See, view and manage couriers"
                links={[{ Link: "/Couriers", label: "Couriers" }]}
              />
              <Button
                onClick={() => router.push("Couriers/Add-courier")}
                className="border border-gray-30 text-gray-700  "
              >
                <Image src={Add} alt="" />
                Add courier
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-gray-950 font-md text-Text-sm leading-5 ">
                Your kitchen’s couriers
              </p>
              <p className="text-gray-600 font-xs text-Text-sm leading-5 ">
                All couriers added by you
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 shadow-sm">
              <Table className="w-full rounded-md">
                <TableHeader className="w-full flex px-0">
                  <TableRow className="w-full flex bg-gray-50 border-b border-gray-200 !rounded-md">
                    <TableHead className="flex h-10 py-3  items-center gap-3 !px-6 self-stretc ">
                      <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                        Key
                      </p>
                    </TableHead>
                    <TableHead className=" w-[16.3rem] flex h-10 py-3 px-6 items-center gap-3 self-stretch">
                      <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                        Courier
                      </p>
                    </TableHead>
                    <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                      <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                        Price
                      </p>
                    </TableHead>
                    <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                      <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                        Date added
                      </p>
                    </TableHead>
                    <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {test.map((d, index) => (
                    <TableRow
                      onClick={() => router.push("Couriers/Couriers-Details")}
                      key={index}
                      className="flex  bg-white h-20 border-b border-gray-200 "
                    >
                      <TableCell className="w-[6.5rem] flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                        <p className="text-gray-500 text-sm leading-5 font-xs ">
                          #QWE92
                        </p>
                      </TableCell>
                      <TableCell className="w-[14rem] flex  items-center  h-20 gap-3 py-4 pl-2  self-stretch ">
                        <Image
                          src={Avatar}
                          alt=""
                          className="w-[2.5rem] h-[2.5rem]"
                        />
                        <p className="text-gray-900 text-sm font-sm ">
                          Jenny Wilson
                        </p>
                      </TableCell>
                      <TableCell className="flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                        <p className="text-gray-900 text-sm  font-sm ">
                          $10.00
                        </p>
                      </TableCell>
                      <TableCell className="flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                        <p className="text-gray-500 text-sm leading-5 font-xs ">
                          Feb 22, 2022
                        </p>
                      </TableCell>
                      <TableCell className="flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
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
    </div>
  );
};

export default Couriers;
