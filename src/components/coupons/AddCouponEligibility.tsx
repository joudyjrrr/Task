import React from "react";
import DatePicker from "../custom/DatePicker";
import TimeStamp from "../custom/TimeStamp";
import Title from "../custom/Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddCouponInfoProps {
  prevStep: string;
  setStep: (prevStep: string) => void;
}

const AddCouponEligibility: React.FunctionComponent<AddCouponInfoProps> = ({
  setStep,
  prevStep,
}) => {
  const changeStepHandler = () => {
    setStep(prevStep);
  };

  return (
    <div className="px-[2.5rem] py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex w-full pb-5">
          <Title
            Title="  Add Coupon"
            SubTitle="All coupons created by you"
            links={[
              { Link: "/Coupons", label: "Coupons" },
              { Link: "/AddCoupons", label: "Add Coupon" },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-8 w-full">
        <div className=" flex flex-col gap-8 flex-grow">
          <div className="flex justify-center items-center">
            <div className="h-[1px] flex-grow bg-gray-200"></div>
            <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
              Eligibility
            </p>
            <div className="h-[1px] flex-grow bg-gray-200"></div>
          </div>
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label className="flex">
              <p className="text-gray-700 text-Text-sm font-sm leading-5 flex-grow">
                Maximum Uses in General{" "}
              </p>
              <img
                src={"/svg/global/info-circle.svg"}
                alt=""
                className="w-3 h-3"
              />
            </Label>
            <Input placeholder="Limit number of times this coupon can be used" />
          </div>
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label> Maximum Uses in Personal</Label>
            <div className="flex  rounded-md border border-gray-300 shadow-sm ">
              <p className="py-2 flex basis-[50%] justify-center  px-4 border-r border-gray-300 text-gray-700  font-md text-Text-sm leading-5">
                Maximum Uses in Personal
              </p>
              <p className="py-2  flex basis-[50%] justify-center bg-gray-100  px-4 text-gray-700  font-md text-Text-sm leading-5">
                Unlimited
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="h-[1px] flex-grow bg-gray-200"></div>
            <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
              Calendar
            </p>
            <div className="h-[1px] flex-grow bg-gray-200"></div>
          </div>

          <div className="flex gap-6 w-full">
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label>Start Date</Label>
              <DatePicker />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label className="flex">End Date</Label>
              <div className="border !border-gray-300 !h-[2.5rem]  flex items-center  rounded-radius_md gap-3  px-[0.875rem]">
                <img src={"/svg/input/clock.svg"} alt="" className="w-5 h-5" />
                <Input
                  type="time"
                  placeholder="19:23"
                  defaultValue={"19:23"}
                  className="justify-start !p-0 border-none shadow-none !outline-none !focus:outline-none text-Gray-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-6 w-full">
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label className="flex gap-1">
                Finish Date <p className="text-gray-400">(Optional)</p>
              </Label>
              <DatePicker />
            </div>
            <div className="w-full flex flex-col gap-[0.38rem]">
              <Label className="flex gap-1">
                Finish "/svg/input/clock.svg"{" "}
                <p className="text-gray-400">(Optional)</p>
              </Label>
              <div className="border !border-gray-300 !h-[2.5rem]  flex items-center  rounded-radius_md gap-3  px-[0.875rem]">
                <img src={"/svg/input/clock.svg"} alt="" className="w-5 h-5" />
                <Input
                  type="time"
                  placeholder="19:23"
                  defaultValue={"19:23"}
                  className="justify-start !p-0 border-none shadow-none !outline-none !focus:outline-none text-Gray-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="h-[1px] flex-grow bg-gray-200"></div>
            <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
              Combinations
            </p>
            <div className="h-[1px] flex-grow bg-gray-200"></div>
          </div>

          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label>Allowed Combinations</Label>
            <div className="flex  rounded-md border border-gray-300 shadow-sm ">
              <p className="py-2 flex basis-[50%] justify-center  px-4 border-r border-gray-300 text-gray-700  font-md text-Text-sm leading-5">
                Non
              </p>
              <p className="py-2  flex basis-[50%] justify-center bg-gray-100  px-4 border-r border-gray-300 text-gray-700  font-md text-Text-sm leading-5">
                Other Discounts
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              // onClick={() => router.push("Add-Coupon2")}
              className="bg-Brand-600 text-white"
            >
              Add Coupon
            </Button>
            <Button
              onClick={changeStepHandler}
              className="border border-gray-300"
            >
              Back
            </Button>
          </div>
        </div>
        <TimeStamp
          title1="New coupon"
          SubTitle1="General informations about offer"
          title2="Eligibility"
          SubTitle2="General informations about offer"
          step2={true}
        />
      </div>
    </div>
  );
};

export default AddCouponEligibility;
