import React from "react";
import chart from "../../Assets/Images/_Chart mini.png";
import ArrowUp from "../../Assets/SVGs/Dashboard/arrow-up.svg";
import Filter from "../../Assets/SVGs/Dashboard/filter-funnel-02.svg";
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
import dot from "../../Assets/SVGs/Dashboard/dots-vertical.svg";
import Pagenation from "../../Components/Pagenation";
const Transactions = () => {
    const test = ["", "", "", "", ""];
  return (
    <>
      <div className="flex gap-6 pt-6 w-full">
        <div className="flex flex-col flex-grow border rounded-xl border-gray-200 shadow-sm">
          <div className="flex justify-between  ">
            <div className="flex flex-col justify-center gap-2 p-6 pb-8 pr-0">
              <p className="text-gray-400 font-sm text-Text-sm leading-5">
                Available
              </p>
              <div className="flex gap-2">
                <p className="text-gray-950 font-sm text-[1.75rem] leading-6">
                  $24.55
                </p>
                <div className="flex gap-0.5 items-center">
                  <Image
                    src={ArrowUp}
                    alt=""
                    className="w-[0.6rem] h-[0.6rem]"
                  />
                  <p className="text-Success-700 font-sm text-Text-sm leading-5">
                    100%
                  </p>
                </div>
              </div>
            </div>
            <Image src={chart} alt="" />
          </div>
          <div className="flex bg-Gray-25 border-t border-gray-200 rounded-bl-lg rounded-br-lg p-4">
            <p className="text-gray-600 font-[440] text-Text-sm leading-5">
              $24.55 collected from 2 order(s)
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow   border rounded-xl border-gray-200 shadow-sm">
          <div className="flex justify-between  ">
            <div className="flex flex-col justify-center gap-2 p-6 pb-8 pr-0">
              <p className="text-gray-400 font-sm text-Text-sm leading-5">
                Available
              </p>
              <div className="flex gap-2">
                <p className="text-gray-950 font-sm text-[1.75rem] leading-6">
                  $24.55
                </p>
                <div className="flex gap-0.5 items-center">
                  <Image
                    src={ArrowUp}
                    alt=""
                    className="w-[0.6rem] h-[0.6rem]"
                  />
                  <p className="text-Success-700 font-sm text-Text-sm leading-5">
                    100%
                  </p>
                </div>
              </div>
            </div>
            <Image src={chart} alt="" />
          </div>
          <div className="flex bg-Gray-25 border-t border-gray-200 rounded-bl-lg rounded-br-lg p-4">
            <p className="text-gray-600 font-[440] text-Text-sm leading-5">
              $24.55 collected from 2 order(s)
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5   !rounded-xl border border-gray-200 shadow-sm w-full">
        <div className="w-full flex   items-center gap-5 !px-6 !pt-5">
          <p className="text-gray-900 text-lg font-semibold leading-6 flex-grow">
            Transactions
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
          <TableHeader className="w-full flex px-0">
            <TableRow className="w-full flex bg-gray-50 border-b border-gray-200">
              <TableHead className="w-[7.5rem] flex h-10 py-3  items-center gap-3 !px-6 self-stretc ">
                <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                  Date
                </p>
              </TableHead>
              <TableHead className=" w-[45rem] flex h-10 py-3 px-6 items-center gap-3 self-stretch">
                <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                  Order
                </p>
              </TableHead>
              <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                <p className=" text-gray-600 text-Text-xs font-sm leading-5">
                  Payment
                </p>
              </TableHead>
              <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {test.map((t, index) => (
              <TableRow key={index} className="flex  bg-white h-20 border-b border-gray-200 ">
                <TableCell className="flex  items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                  <p className="text-gray-600 text-sm leading-5 font-xs ">
                    18/09/2016
                  </p>
                </TableCell>
                <TableCell className="w-[45.5rem] flex flex-col justify-start gap-2 p-4">
                  <p className="text-gray-900 text-sm leading-5 font-sm">
                    BBQ Bliss Burger, Sweet Potato Fries M
                  </p>
                  <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                    Cheese Lovers Delight is a cheese paradise and de
                  </p>
                </TableCell>
                <TableCell className="flex justify-center items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                  <p className="text-gray-900 text-sm leading-5 font-sm ">
                    $14.81
                  </p>
                </TableCell>
                <TableCell className="flex justify-center items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                  <Image src={dot} alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagenation />
      </div>
    </>
  );
};

export default Transactions;
