"use client";
import Image from "next/image";
import React, { useState } from "react";
import Pl from "../../Assets/SVGs/Dashboard/placeholder.svg";
import Pl2 from "../../Assets/SVGs/Dashboard/placeholder(1).svg";
import Help from "../../Assets/SVGs/Dashboard/help-circle.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CustomSelect from "../../Components/CustomSelect";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";
import { StylesConfig } from "react-select";
const AddItems = () => {
  const router = useRouter();
  const Styles: StylesConfig = {
    valueContainer: (style) => ({
      ...style,
      display: "flex",
      alignItems: "start",
      padding: "0.75rem",
      height: "100%",
      gap: "0.5rem",
    }),
    control: (style) => ({
      ...style,
      height: "50px",
      ":focus": {
        outline: "none",
        border: "none",
      },
    }),
    menuList: (style) => ({
      ...style,
      padding: "1rem",
    }),
    option: (style) => ({
      ...style,
      ":hover": {
        backgroundColor: "#F9FAFB",
      },
    }),
  };
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start w-full">
            <Title
              Title=" Add Item"
              SubTitle="Add a new item to your kitchen"
              links={[
                { Link: "/item", label: "Items" },
                { Link: "/Add-Item", label: "Add Items" },
              ]}
            />
          </div>
          <div className="w-full flex flex-col gap-12">
            <div className="flex flex-col gap-6 w-full">
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Food Name</Label>
                <Input placeholder="What is the name of this dish?" />
              </div>
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Cuisine</Label>
                <Input placeholder="Which region is this dish from?" />
              </div>

              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <Label>Category</Label>
                  <CustomSelect
                    values={["One", "Two"]}
                    placeholder="What is the food category of this dish?"
                  />
                </div>

                <div className="w-full flex flex-col gap-[0.38rem]">
                  <Label>Subcategory</Label>
                  <CustomSelect
                    values={["One", "Two"]}
                    placeholder="What is the subcategory of this dish?"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Preparing Time</Label>
                <CustomSelect
                  values={["One", "Two"]}
                  placeholder="How long does it take to prepare this dish?"
                />
              </div>

              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Portion</Label>
                <CustomSelect
                  values={["One", "Two"]}
                  placeholder="What is the portion size of this dish?"
                />
              </div>

              <div className="w-ful flex flex-col gap-[0.38rem]">
                <Label className="flex">
                  Spicy Level <p className="text-gray-400">(Optional)</p>
                </Label>
                <div className="flex items-start rounded-lg border border-gray-300 shadow-sm h-[2.5rem]">
                  <div className="flex basis-[35%] justify-center items-center py-2 px-4 gap-2 border-r border-gray-300 bg-gray-50">
                    <Image src={Pl} alt="" className="w-5 h-5" />
                    <p className="text-gray-800 text-Text-sm font-md leading-5">
                      Mid
                    </p>
                  </div>
                  <div className="flex  basis-[33%] justify-center items-center py-2 px-4 gap-2 border-r border-gray-300">
                    <Image src={Pl2} alt="" className="w-5 h-5" />
                    <p className="text-gray-800 text-Text-sm font-md leading-5">
                      Medium
                    </p>
                  </div>
                  <div className="flex  basis-[33%] justify-center items-center py-2 px-4 gap-2 border-r border-gray-30">
                    <Image src={Pl2} alt="" className="w-5 h-5" />
                    <p className="text-gray-800 text-Text-sm font-md leading-5">
                      Hot
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex justify-center items-center">
                <div className="h-[1px] flex-grow bg-gray-200"></div>
                <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
                  Diet Specifications
                </p>
                <div className="h-[1px] flex-grow bg-gray-200"></div>
              </div>

              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Calories</Label>
                <CustomSelect
                  values={["One", "Two"]}
                  placeholder="1500"
                  TriggerClassName="w-full flex"
                >
                  <p className=" flex flex-grow justify-end">Cal</p>
                </CustomSelect>
              </div>
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Fat</Label>
                <CustomSelect
                  values={["One", "Two"]}
                  placeholder="5%"
                  TriggerClassName="w-full flex"
                >
               
                  <div className=" flex flex-grow justify-end items-center">
                    <Image src={Help} alt="" className="w-4 h-4 " />
                    <p className="px-[0.875rem] py-[0.625rem]">Cal</p>
                  </div>
                </CustomSelect>
              </div>
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Ingredients</Label>
                <MultiSelect />
              </div>
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Allergic Substances</Label>
                <MultiSelect style={Styles} />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => router.push("Add-Item2")}
                  Color={`Orang`}
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
    </div>
  );
};

export default AddItems;
