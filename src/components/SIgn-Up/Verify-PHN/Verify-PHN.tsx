import React from "react";
import Image from "next/image";
import SignUpHeader from "../SignUpHeader";
import phone from "../../../Assets/SVGs/phone.svg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SVGBackGround from "../../../Components/SVGBackGround";
import WhyDoThis from "../../../Components/WhyDoThis";

const VerifyPHN = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-[6.6875rem]">
        <SignUpHeader />
        <div className="w-full">
          {/* card */}
          <div
            className={`flex p-8 flex-col items-center gap-12 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            {/* first */}
            <div className="flex flex-col justify-between items-center gap-6">
              <SVGBackGround src={phone} alt="phone" />
              <div className="flex flex-col items-center justify-between">
                <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
                  Verify your phone number
                </p>
                <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
                  We just send a 6-digit-code to +90 535 900 90 95
                </p>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col items-start justify-center gap-10 w-full">
              {/* first */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <Label>Code</Label>
                  <Input placeholder="Enter your code" />
                </div>
                <WhyDoThis />
              </div>
              {/* second */}
              <div className="flex flex-col items-start gap-3 w-full">
                <Button className="text-Base-White bg-Brand-600 w-full flex justify-center items-center shadow-xs py-[10px] border rounded-lg">
                  Verify Phone Number
                </Button>
                <Button className="text-Gray-400 bg-Gray-100 border border-Gray-200 w-full flex justify-center items-center py-[10px] rounded-lg shadow-xs ">
                  Resend
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPHN;
