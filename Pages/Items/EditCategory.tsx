"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomSelect from "../../Components/CustomSelect";
import MulriSelect from "../../Components/MultiSelect/MultiSelect";
import { Button } from "@/components/ui/button";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import MultiSelectCategory from "./MultiSelectCategory";

const EditCategory = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
    <SideBar />
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex flex-col flex-grow gap-5 items-start border-b border-gray-300 pb-5 w-full">
        <Title
              Title="Edit Category"
              SubTitle=" Update the category information"
              links={[
                { Link: "/items", label: "Items" },
                { Link: "/Edit-category", label: "  Edit Category" },
              ]}
            />
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
              <MultiSelectCategory />
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
