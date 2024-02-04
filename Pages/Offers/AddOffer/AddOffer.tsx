import React from "react";
import Title from "../../../Components/Title";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import info from "../../../Assets/SVGs/info-circle.svg";

const links = [
  { label: "Offers", Link: "/Offers" },
  { label: "Add Offer", Link: "/Add-Offer" },
];
const AddOffer = () => {
  return (
    <div className="pt-12 px-16 w-full">
      <div className=" flex flex-col gap-10 w-full px-4">
        <Title
          Title="Add Offer"
          SubTitle="Add a new offer for your kitchen."
          links={links}
        />
        <div className="flex justify-between items-start gap-8">
          {/* first */}
          <div className="flex justify-center gap-8">
            <div className="flex flex-col w-full">
              <div className=" flex flex-col gap-6">
                <div className="flex flex-col gap-[6px]">
                  <Label className="">Offer Name</Label>
                  <Input placeholder="test" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label className="">Offer Name</Label>
                  <Input placeholder="test" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Label className="">Offer Name</Label>
                  <Input placeholder="test" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="flex">
                  <br />
                  value
                  <br />
                </span>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Discount Value</Label>
                    <Input placeholder="applies To" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Discount Value</Label>
                    <Input placeholder="applies To" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Discount Value</Label>
                    <Input placeholder="applies To" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <span className="flex">
                  <br />
                  Requirements
                  <br />
                </span>
                <div className="">
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <p className="flex justify-between items-center">
                      <Label>Purchase Requirements</Label>
                      <Image src={info} alt="info" />
                    </p>
                    <Input placeholder="test" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-[6px]">
                    <Label>Purchase Requirements</Label>
                    <Input placeholder="test" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Button className="w-full">test</Button>
              <Button className="w-full">test</Button>
            </div>
          </div>

          {/* second */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
