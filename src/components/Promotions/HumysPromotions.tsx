import React, { useState } from "react";
import Dot from "../../../public/svg/global/dot.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ModelDetails from "./ModelDetails";
import { useNavigate } from "react-router-dom";
import { PROMOTIONS_PATH } from "@/routes/paths";
const HumysPromotions = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const test = ["", "", "", ""];
  return (
    <Table className="flex-grow ">
      <TableHeader className="">
        <TableRow className="w-full flex  bg-gray-50 border-b border-gray-200">
          <TableHead className="w-[18rem]">
            <p className="text-gray-600   text-Text-xs font-sm leading-5">
              Promotion
            </p>
          </TableHead>
          <TableHead className="w-[7.8rem]">
            <p className="text-gray-600 text-Text-xs font-sm leading-5">
              Date added
            </p>
          </TableHead>
          <TableHead className="w-[7.8rem]">
            <p className="text-gray-600 text-Text-xs font-sm leading-5">
              End date
            </p>
          </TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {test.map((d) => (
          <TableRow className="justify-center">
            <TableCell className="flex flex-col w-[18rem] p-4">
              <p className="text-gray-900 text-sm leading-5 font-sm">
                New Client Bonus
              </p>
              <p className="text-gray-600 text-sm leading-5 font-xs">
                First order? Get a surprise instantly
              </p>
            </TableCell>
            <TableCell className="flex justify-center flex-col  p-4 ">
              <p className="text-gray-600 text-sm leading-5 font-xs">
                Feb 22, 2022
              </p>
            </TableCell>
            <TableCell className="flex justify-center flex-col p-4">
              <p className="text-gray-600 text-sm leading-5 font-xs">
                Feb 23, 2022
              </p>
            </TableCell>
            <TableCell className="flex  flex-grow items-center justify-end">
              <p
                className="text-gray-600 text-md leading-5 font-md cursor-pointer"
                onClick={() => navigate(PROMOTIONS_PATH.PROMOTIONS_DETAILS)}
              >
                Details
              </p>
              <ModelDetails />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HumysPromotions;
