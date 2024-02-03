"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import Pl from "../../Assets/SVGs/Dashboard/placeholder.svg";
import Pl2 from "../../Assets/SVGs/Dashboard/placeholder(1).svg";
import Help from "../../Assets/SVGs/Dashboard/help-circle.svg";
import Close from "../../Assets/SVGs/Dashboard/x-close.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CustomSelect from "../../Components/CustomSelect";
const AddItems = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState<string>("");
  const [styledText, setStyledText] = useState<string[]>([]);
  const [input2Text, setInputText2] = useState<string>("");
  const [styled2Text, setStyledText2] = useState<string[]>([]);
  const handleKeyPress: any = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      setStyledText((prevText) => [...prevText, inputText]);
      setInputText("");
    }
  };
  const handleKeyPress2: any = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      setStyledText2((prevText) => [...prevText, input2Text]);
      setInputText2("");
    }
  };
  const handleRemoveItem2 = (index: number) => {
    setStyledText2((prevText) => {
      const updatedText = [...prevText];
      updatedText.splice(index, 1);
      return updatedText;
    });
  };
  const handleRemoveItem1 = (index: number) => {
    setStyledText((prevText) => {
      const updatedText = [...prevText];
      updatedText.splice(index, 1);
      return updatedText;
    });
  };
  return (
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
              Add Item
            </p>
          </div>

          <div>
            <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
              Add Item
            </h1>
            <p className="px-2 text-gray-500 text-Text-md font-xs leading-6">
              Add a new item to your kitchen
            </p>
          </div>
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
            <div className="flex items-center gap-2">
              <p className="bg-gray-200 h-[0.0625rem] w-[25rem]"></p>
              <p className="text-gray-600 text-Text-sm font-md left-5 ">
                Diet Specifications{" "}
              </p>
              <p className="bg-gray-200 h-[0.0625rem] w-[25rem]"></p>
            </div>

            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Calories</Label>
              <CustomSelect
                values={["One", "Two"]}
                placeholder="1500"
                TriggerClassName="w-full flex"
                children={<p className=" flex flex-grow justify-end">Cal</p>}
              />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Fat</Label>
              <CustomSelect
                values={["One", "Two"]}
                placeholder="5%"
                TriggerClassName="w-full flex"
                children={
                  <div className=" flex flex-grow justify-end items-center">
                    <Image src={Help} alt="" className="w-4 h-4 " />
                    <p className="px-[0.875rem] py-[0.625rem]">Cal</p>
                  </div>
                }
              />
            </div>
            <div>
              <Label>Ingredients</Label>
              <div className="w-full flex-col flex p-3 gap-2 rounded-md border border-gray-300  shadow-sm">
                <div className="flex gap-1">
                  {styledText &&
                    styledText.map((d, index) => (
                      <div className="flex p-0.5 pl-[0.5625rem] gap-[0.19rem] justify-center items-center rounded-md border border-gray-300">
                        <p>{d}</p>
                        <Image
                          onClick={() => handleRemoveItem1(index)}
                          src={Close}
                          alt=""
                          className="w-3 h-3"
                        />
                      </div>
                    ))}
                </div>
                <Textarea
                  className="!border-none shadow-none !outline-none !focus:outline-none"
                  value={inputText}
                  onChange={(event: any) => setInputText(event.target.value)}
                  onKeyPress={handleKeyPress}
                  rows={1}
                />
              </div>
            </div>
            <div>
              <Label>Allergic Substances</Label>
              <div className="w-full flex p-3 gap-2 rounded-md border border-gray-300  shadow-sm">
                <div className="flex gap-[0.38rem]">
                  {styled2Text &&
                    styled2Text.map((d, index) => (
                      <div className="flex p-0.5 gap-[0.19rem] pl-[0.5625rem] justify-center items-center rounded-md border border-gray-300">
                        <p>{d}</p>
                        <Image
                          onClick={() => handleRemoveItem2(index)}
                          src={Close}
                          alt=""
                          className="w-3 h-3"
                        />
                      </div>
                    ))}
                </div>
                <Input
                  className="!border-none shadow-none !outline-none !focus:outline-none !p-0"
                  value={input2Text}
                  onChange={(event: any) => setInputText2(event.target.value)}
                  onKeyPress={handleKeyPress2}
                />
              </div>
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
  );
};

export default AddItems;
