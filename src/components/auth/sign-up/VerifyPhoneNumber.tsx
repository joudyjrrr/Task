import SVGBackGround from "@/components/custom/MultiSelect/SVGBackGround";
import WhyDoThis from "@/components/custom/MultiSelect/WhyDoThis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface VerifyPhoneNumberProps {
    setStep: (step: string) => void;
}

const VerifyPhoneNumber: React.FunctionComponent<VerifyPhoneNumberProps> = ({
  setStep,
}) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-6">
        <SVGBackGround src={"/svg/sign-in/phone.svg"} alt="phone" />
        <div className="flex flex-col items-center justify-between">
          <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
            Verify your phone number
          </p>
          <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
            We just send a 6-digit-code to +90 535 900 90 95
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-10 w-full">
        {/* first */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <Label>Code</Label>
            <Input placeholder="Enter your code" />
            <WhyDoThis />
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col items-start gap-3 w-full">
          <Button
            onClick={setStep}
            className="text-Base-White bg-Brand-600 w-full flex justify-center items-center shadow-xs py-[10px] border rounded-lg"
          >
            Verify Phone Number
          </Button>
          <Button className="text-Gray-400 bg-Gray-100 border border-Gray-200 w-full flex justify-center items-center py-[10px] rounded-lg shadow-xs ">
            Resend
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerifyPhoneNumber;
