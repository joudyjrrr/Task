"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import DragDrop from "../../Components/DragDrop";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import CustomSelect from "../../Components/CustomSelect";
import AddRE from "../../Assets/SVGs/Dashboard/add-rectangle.svg";
import { Button } from "@/components/ui/button";
import MulriSelect from "../../Components/MultiSelect/MultiSelect";
import { useRouter } from "next/navigation";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";

const Additems2 = () => {
  const router = useRouter();
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <Title
              Title=" Add Item"
              SubTitle="Add a new item to your kitchen"
              links={[
                { Link: "/item", label: "Items" },
                { Link: "/Add-Item", label: "Add Items" },
              ]}
            />
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-[0.375rem]">
                <Label>Item Picture</Label>
                <DragDrop />
              </div>
              <div>
                <Label>Item Description</Label>
                <Textarea placeholder="Provide a description for this item" />
              </div>

              <div className="flex flex-col gap-[0.375rem]">
                <Label>Item Description</Label>
                <div className="flex items-center px-[0.875rem] gap-2 border border-gray-300 rounded-lg">
                  <p className="text-gray-600 text-Text-md font-xs leading-6">
                    $
                  </p>
                  <Input className="!border-none shadow-none !outline-none !focus:outline-none flex-grow p-0" />
                  <CustomSelect
                    values={["Uds", "ssl"]}
                    placeholder="USD"
                    TriggerClassName="!border-none shadow-none !outline-none !focus:outline-none flex-grow p-0 w-fit"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-gray-200 h-[0.0625rem] w-[28rem]"></p>
                <p className="text-gray-600 text-Text-sm font-md left-5 ">
                  Additional{" "}
                </p>
                <p className="bg-gray-200 h-[0.0625rem] w-[28rem]"></p>
              </div>

              <div className="flex flex-col gap-[0.375rem]">
                <Label className="flex">
                  Discount <p className="text-gray-400">(Optional)</p>
                </Label>
                <div className="flex items-center px-[0.875rem] gap-2 border border-gray-300 rounded-lg">
                  <p className="text-gray-600 text-Text-md font-xs leading-6">
                    $0
                  </p>
                  <Input className="!border-none shadow-none !outline-none !focus:outline-none flex-grow p-0" />
                  <CustomSelect
                    values={["Uds", "ssl"]}
                    placeholder="Percentage"
                    TriggerClassName="!border-none shadow-none !outline-none !focus:outline-none flex-grow p-0 w-fit"
                  />
                </div>
              </div>

              <div className="flex gap-4 items-end">
                <div className="flex flex-col gap-[0.375rem] flex-grow">
                  <Label className="flex">
                    Item Customatization{" "}
                    <p className="text-gray-400">(Optional)</p>
                  </Label>
                  <Input placeholder='e.g., "Extra ingredient", "Double cheese", "Wrap double"' />
                </div>
                <div className="flex items-center px-[0.875rem] gap-2 border border-gray-300 rounded-lg h-fit">
                  <p className="text-gray-600 text-Text-md font-xs leading-6">
                    $
                  </p>

                  <CustomSelect
                    values={["Uds", "ssl"]}
                    placeholder="USD"
                    TriggerClassName="!border-none shadow-none !outline-none !focus:outline-none flex-grow px-4 w-fit"
                  />
                </div>
              </div>
              <div className="flex items-center px-4 gap-2 border border-gray-300 rounded-lg bg-gray-50">
                <Image src={AddRE} alt="home" className="w-5 h-5" />
                <Input
                  className="!border-none shadow-none !outline-none !focus:outline-none p-0"
                  placeholder="Add customization"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => router.push("rivew-item")}
                className="bg-Brand-600 text-white"
              >
                Next
              </Button>
              <Button className="border border-gray-300">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additems2;
