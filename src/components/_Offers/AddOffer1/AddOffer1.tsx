import React from "react";
import Title from "../../../Components/Title";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import info from "../../../Assets/SVGs/info-circle.svg";
import ProgressBar from "../../../Components/ProgressBar";
import PriceInput from "../../../Components/PriceInput";
import { Textarea } from "@/components/ui/textarea";
import DragDrop from "../../../Components/DragDrop";
import Link from "next/link";
import PercentValue from "../../../Components/PercentValue";
import Multitext from "../../../Components/Multitext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HR from "../../../Components/HR";

const links = [
  { label: "Offers", Link: "/Offers" },
  { label: "Add Offer", Link: "/Offers/Add-Offer" },
];
const AddOffer = () => {
  return (
    <div className="pt-12 px-16 w-full flex flex-col">
      <div className=" flex flex-col gap-10 w-full px-4">
        <Title
          Title="Add Offer"
          SubTitle="Add a new offer for your kitchen."
          links={links}
        />
        <div className="flex w-full justify-between items-start gap-8">
          <div className="flex flex-col w-full justify-between gap-8">
            <div className="flex flex-col w-full gap-8">
              <div className=" flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-[6px] w-full">
                  <Label className="w-full">Offer Name</Label>
                  <Input placeholder="Offer Name" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label className="">Description</Label>
                  <Textarea
                    placeholder="A little about the company"
                    className="h-[154px] resize-none"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label className="">Picture</Label>
                  <DragDrop className="w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <HR>Value</HR>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Discount Value</Label>
                    <PercentValue className="w-full" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    {/*  */}
                    <Label>Applies To</Label>
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger
                          value="account"
                          className="data-[state=active]:rounded-l-lg"
                        >
                          Specific Items
                        </TabsTrigger>
                        <TabsTrigger
                          value="password"
                          className="data-[state=active]:rounded-r-lg data-[state=active]:border-l-4 data-[state=active]:border-l-red-300"
                        >
                          Specific Categories
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Items</Label>
                    <Multitext />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <HR>Requirements</HR>

                <div className="flex flex-col gap-4 justify-between">
                  <div className="flex flex-col justify-start items-start gap-[6px] w-full">
                    {/*  */}
                    <p className="flex justify-between items-center w-full">
                      <Label>Purchase Requirements</Label>
                      <Image src={info} alt="info" />
                    </p>
                    <Tabs defaultValue="Non" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger
                          value="Non"
                          className="data-[state=active]:border data-[state=active]:border-l-Gray-300 data-[state=active]:rounded-l-lg"
                        >
                          Non
                        </TabsTrigger>
                        <TabsTrigger
                          value="Amount"
                          className="data-[state=active]:border data-[state=active]:border-l-Gray-300"
                        >
                          Amount
                        </TabsTrigger>
                        <TabsTrigger
                          value="Quantity"
                          className="data-[state=active]:border data-[state=active]:border-l-Gray-300 data-[state=active]:rounded-r-lg"
                        >
                          Quantity
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <PriceInput
                      label="Minimum Purchase Amount"
                      placeholder=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Link href={"/Offers/AddOffer2"}>
                <Button className="w-full bg-Brand-600 !text-Base-White font-semibold leading-4 text-Text-md border border-Brand-600">
                  Next
                </Button>
              </Link>
              <Button className="w-full bg-white border border-Gray-300 text-Gray-700 font-semibold leading-6 text-Text-md shadow-none">
                Cancel
              </Button>
            </div>
          </div>

          <div>
            <ProgressBar
              SubTitle1="test"
              SubTitle2="test2"
              title1="Test"
              title2="Test2"
              step2={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
