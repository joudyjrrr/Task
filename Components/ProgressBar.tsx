import React, { FC } from "react";
import Step1 from "../Assets/SVGs/Progress steps/_Step icon base.svg";
import GrayStep from "../Assets/SVGs/Progress steps/Content.svg";
import Check from "../Assets/SVGs/Progress steps/Check.svg";
import Image from "next/image";
const ProgressBar: FC<{
  title1: string;
  SubTitle1: string;
  title2: string;
  SubTitle2: string;
  step2: boolean;
}> = ({ title1, title2, SubTitle2, SubTitle1, step2 }) => {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex flex-col justify-center items-center">
        <Image src={step2 ? Check : Step1} alt="" />
        <div className="w-0.5 h-[2.125rem] bg-gray-200 "></div>
        <Image src={step2 ? Step1 : GrayStep} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <p
            className={`${
              step2 ? "text-gray-950" : "text-Brand-700"
            } font-md text-Text-sm leading-5 `}
          >
            {title1}
          </p>
          <p
            className={`${
              step2 ? "text-gray-500" : "text-Brand-700"
            }} font-xs text-Text-sm leading-5`}
          >
            {SubTitle1}
          </p>
        </div>
        <div className="flex flex-col ">
          <p
            className={`${
              step2 ? "text-Brand-700" : "text-gray-500"
            }  font-md text-Text-sm leading-5`}
          >
            {title2}
          </p>
          <p
            className={`${
              step2 ? "text-Brand-700" : "text-gray-500"
            }  font-xs text-Text-sm leading-5`}
          >
            {SubTitle2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
