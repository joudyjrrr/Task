"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import Icon from "../../Assets/SVGs/Dashboard/ExmCircule.svg";
import Dot from "../../Assets/SVGs/Dashboard/Dot.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ModelDetails from "./ModelDetails";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import Link from "next/link";

const index = () => {
  const test = ["", "", "", "", ""];
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start w-full">
            <Title
              Title="Promotions"
              SubTitle="All promotions suggested by Humy"
              links={[{ Link: "/promotions", label: "Promotions" }]}
            />
          </div>
          <div className="flex gap-6 items-center border-b border-gray-300 pb-5 w-full">
            <div className="border border-gray-200 rounded-md flex justify-center p-1">
              <Image src={Icon} alt="home" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex gap-2">
              <p className="text-Brand-300 font-md text-Text-sm leading-6">
                Promotions are irreversible{" "}
              </p>
              <p className="text-gray-600 font-xs text-Text-sm leading-6">
                Once you have joined the offer, it is not possible to withdraw
                it.
              </p>
            </div>
          </div>
          <div className="flex gap-[0.625rem] w-full">
            <div className="flex flex-col gap-1 ">
              <p className="text-gray-950 font-md text-Text-sm leading-6">
                Humys promotions
              </p>
              <p className="text-gray-600 font-xs text-Text-sm leading-6">
                Humys promotions for your kitchen
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 shadow-sm flex-grow relative">
              <Table className="">
                <TableHeader className="">
                  <TableRow className="w-full flex  bg-gray-50 border-b border-gray-200">
                    <TableHead className=" basis-[40%]">
                      <p className="text-gray-600   text-Text-xs font-sm leading-5">
                        Promotion
                      </p>
                    </TableHead>
                    <TableHead className="">
                      <p className="text-gray-600 text-Text-xs font-sm leading-5">
                        Date added
                      </p>
                    </TableHead>
                    <TableHead className="">
                      <p className="text-gray-600 text-Text-xs font-sm leading-5">
                        End date
                      </p>
                    </TableHead>
                    <TableHead className=""></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {test.map((d, index) => (
                    <TableRow key={index} className="justify-center">
                      <TableCell className="flex flex-col basis-[40%]">
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
                        <Link
                          href={`promotions/promotion-details`}
                          className="text-gray-600 text-md leading-5 font-md cursor-pointer"
                        >
                          Details
                        </Link>
                        <ModelDetails />
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

export default index;
