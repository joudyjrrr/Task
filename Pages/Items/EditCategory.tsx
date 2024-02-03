"use client";
import Image from "next/image";
import React from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomSelect from "../../Components/CustomSelect";
import MulriSelect from "../../Components/MultiSelect/MulriSelect";
import { Button } from "@/components/ui/button";
import SideBar from "../../Layout/SideBar";

const EditCategory = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
    <SideBar />
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex flex-col flex-grow gap-5 items-start border-b border-gray-300 pb-5 w-full">
          <div className="flex items-center">
            <Image src={home} alt="home" className="w-5 h-5" />
            <Image src={RwoRight} alt="home" className="w-4 h-4" />
            <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
              Items
            </p>
            <Image src={RwoRight} alt="home" className="w-4 h-4" />
            <p className="py-1 flex justify-center rounded-md bg-gray-50 px-2 text-gray-700 text-Text-sm font-md leading-5">
              Edit Category
            </p>
          </div>

          <div>
            <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
              Edit Category
            </h1>
            <p className="px-2 text-gray-500 text-Text-md font-xs leading-6">
              Update the category information
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[0.38rem]">
              <Label>Category Name</Label>
              <Input placeholder="Hamburgers" />
            </div>
            <div className="flex flex-col gap-[0.38rem]">
              <Label>Subcategory</Label>
              <CustomSelect
                placeholder="Special Hamburgers"
                values={["Uds", "ssl"]}
              />
            </div>

            <div className="flex flex-col gap-[0.38rem]">
              <Label>Added Items</Label>
              <MulriSelect />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="bg-Brand-600 text-white">Ubdate Category</Button>
            <Button className="border border-gray-300">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditCategory;
