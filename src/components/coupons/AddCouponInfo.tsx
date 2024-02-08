import React from "react";
import CustomSelect from "../custom/MultiSelect/CustomSelect";
import Multitext from "../custom/MultiSelect/Multitext";
import TimeStamp from "../custom/TimeStamp";
import Title from "../custom/Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { COUPONS_PATH } from "@/routes/paths";

interface AddCouponInfoProps {
  nextStep: string;
  setStep: (nextStep: string) => void;
}

const AddCouponInfo: React.FunctionComponent<AddCouponInfoProps> = ({
  nextStep,
  setStep,
}) => {
  const changeStepHandler = () => {
    setStep(nextStep);
  };

  return (
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex w-full">
          <div className="flex flex-grow flex-col  gap-5 items-start  pb-5">
            <Title
              Title="  Add Coupon"
              SubTitle="Add a new coupon for your kitchen"
              links={[
                { Link: COUPONS_PATH.ALL_COUPONS, label: "Coupons" },
                { Link: COUPONS_PATH.ADD_COUPONS, label: "Add Coupon" },
              ]}
            />
          </div>
        </div>
        <div className="flex gap-8 w-full">
          <div className=" flex flex-col gap-8 flex-grow">
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Coupon Name</Label>
              <Input placeholder="Coupon’s name" />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Coupon Code</Label>
              <Input placeholder="i.e, DELICIOUS" />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Coupon Code</Label>
              <Textarea rows={3} placeholder="A little about the coupon" />
            </div>

            <div className="flex justify-center items-center">
              <div className="h-[1px] flex-grow bg-gray-200"></div>
              <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
                Value
              </p>
              <div className="h-[1px] flex-grow bg-gray-200"></div>
            </div>

            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Discount Value</Label>
              <CustomSelect
                placeholder="%0"
                values={["One", "Two"]}
                children={
                  <p className=" flex flex-grow justify-end">Percentage</p>
                }
              />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Applies To</Label>
              <div className="flex  rounded-md border border-gray-300 shadow-sm ">
                <p className="py-2 flex basis-[35%] justify-center  px-4 border-r border-gray-300 text-gray-700  font-md text-Text-sm leading-5">
                  All Inclusive
                </p>
                <p className="py-2  flex basis-[35%] justify-center bg-gray-100  px-4 border-r border-gray-300 text-gray-700  font-md text-Text-sm leading-5">
                  Specific Items
                </p>

                <p className="py-2 flex basis-[35%] justify-center  px-4  text-gray-700  font-md text-Text-sm leading-5">
                  Specific Categories
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Items</Label>
              <Multitext />
            </div>
            <div className="flex flex-col gap-3">
              <Button
                onClick={changeStepHandler}
                className="bg-Brand-600 text-white"
              >
                Next
              </Button>
              <Button className="border border-gray-300">Cancel</Button>
            </div>
          </div>
          <TimeStamp
            title1="New coupon"
            SubTitle1="General informations about offer"
            title2="Eligibility"
            SubTitle2="General informations about offer"
            step2={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCouponInfo;
