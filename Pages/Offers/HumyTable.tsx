import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import info from "../../Assets/SVGs/info-circle.svg";

const HumyTable = () => {
  const test = ["", "", "", "", ""];
  return (
    <>
      <Table>
        <TableBody>
          <TableHeader className="bg-transparent">
            <TableRow className="bg-Gray-200 border-b border-b-Gray-200 border border-Gray-200  rounded-tl-lg rounded-tr-lg">
              <TableHead className="bg-transparent !w-[18.5rem]  py-3 px-6 font-normal text-Text-xs leading-[18px] text-Gray-600 ">
                Promotion
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[7.8125rem] font-normal text-Text-xs leading-[18px] text-Gray-600">
                Date added
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[13.0625rem] font-normal text-Text-xs leading-[18px] text-Gray-600">
                End date
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[4.5rem] font-normal text-Text-xs leading-[18px] text-Gray-600"></TableHead>
            </TableRow>
          </TableHeader>
          {test.map((t, idx) => {
            return (
              <TableRow
                key={idx}
                className={`${
                  idx + 1 === test.length ? "rounded-bl-lg rounded-br-lg" : ""
                } !border border-Gray-200 border-b-0`}
              >
                <TableCell className="py-4 px-6 flex flex-col  !w-[18.5rem] justify-center border-b border-b-Gray-200">
                  <p className="text-Gray-900 leading-5 font-medium text-Text-sm flex justify-start items-center w-full">
                    Student Savings with Humy
                  </p>
                  <p className="leading-5 font-normal text-Text-sm text-Gray-600 w-full">
                    Students, relish a 15% discount on orders
                  </p>
                </TableCell>
                <TableCell className="py-4 px-6 flex items-center w-[7.8125rem] justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200">
                  Feb 22, 2022
                </TableCell>
                <TableCell className="py-4 px-6  flex items-center w-[13.0625rem] justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200">
                  Feb 23, 2022
                </TableCell>
                <TableCell
                  className={`p-4 flex items-center justify-center w-[4.5rem] text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200 `}
                >
                  <Button className="border-none shadow-none p-0">
                    <Image src={info} alt="info" className="h-5 w-5" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default HumyTable;
