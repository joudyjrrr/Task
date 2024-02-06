import React from "react";
import ArrowUp from "../../Assets/SVGs/Dashboard/arrow-up.svg";
import Filter from "../../Assets/SVGs/Dashboard/filter-funnel-02.svg";
import ArrwoDwon from "../../Assets/SVGs/Dashboard/arrow-down.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import File from "../../Assets/SVGs/Dashboard/File type icon.svg";
import Checkgreen from "../../Assets/SVGs/Checkgreen.svg";

import Pagenation from "../../Components/Pagenation";
import { Checkbox } from "@/components/ui/checkbox";
const Invoices = () => {
  const test = ["", "", "", "", ""];
  return (
    <div className="flex flex-col gap-5   !rounded-xl border border-gray-200 shadow-sm w-full">
      <div className="w-full flex   items-center gap-5 !px-6 !pt-5">
        <p className="text-gray-900 text-lg font-semibold leading-6 flex-grow">
          Billing and invoicing
        </p>
        <div className="flex  gap-3">
          <Button className="border border-gray-300">
            <Image src={Filter} alt="" /> Last 30 Days
          </Button>
          <Button Color={`Orang`} className="bg-Brand-600 text-white">
            Export
          </Button>
        </div>
      </div>

      <Table className="w-full">
        <TableHead className="w-full flex px-0">
          <TableRow className="w-full flex bg-gray-50 border-b border-gray-200">
            <TableHead className="w-[33.8rem] flex h-10 py-3  items-center gap-3 !px-6 self-stretc ">
              <Checkbox className="rounded-[0.375rem]" />
              <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                Invoice
              </p>
            </TableHead>
            <TableHead className=" flex h-10 py-3 px-6 items-center gap-3 self-stretch">
              <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                Billing date
              </p>
              <Image src={ArrwoDwon} alt="" />
            </TableHead>
            <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
              <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                Status
              </p>
            </TableHead>
            <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
              <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                Amount
              </p>
            </TableHead>
            <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {test.map((t, index) => (
            <TableRow key={index} className="flex  bg-white h-20 border-b border-gray-200 ">
              <TableCell className="w-[33.8rem] flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                <Checkbox className="rounded-[0.375rem]" />
                <Image src={File} alt="" className="w-[2.5rem] h-[2.5rem]" />
                <p className="text-gray-900 text-sm leading-5 font-sm ">
                  Invoice #007 – Dec 2022
                </p>
              </TableCell>
              <TableCell className="w-[7.8rem] flex  items-center  h-20 gap-3 py-4 px-6  ">
                <p className=" text-gray-600 text-Text-xs font-xs leading-5">
                  Dec 1, 2022
                </p>
              </TableCell>
              <TableCell className="flex   items-center  h-20 gap-3 py-4 px-6  ">
                <div className="flex gap-1 items-center justify-center   text-center rounded-2xl border border-Success-200 bg-Success-50  py-0.5 pr-[0.625rem] p pl-[0.5rem]">
                  <Image
                    src={Checkgreen}
                    alt="Ar"
                    className="w-2 h-[0.375rem]"
                  />
                  <p className="text-Success-700 text-Text-sm font-sm leading-5">
                    Paid
                  </p>
                </div>
              </TableCell>
              <TableCell className="w-[7.8rem] flex  items-center  h-20 gap-3 py-4 px-6  ">
                <p className=" text-gray-600 text-Text-xs font-xs leading-5">
                  USD $10.00
                </p>
              </TableCell>
              <TableCell className="w-[7.8rem] flex  items-center  h-20 gap-3 py-4 px-6 cursor-pointer ">
                <p className=" text-Brand-700 text-Text-sm font-md leading-5">
                  Download
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagenation/>
    </div>
  );
};

export default Invoices;
