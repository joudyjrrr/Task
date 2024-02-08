import CustomSelect from "@/components/custom/MultiSelect/CustomSelect";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface VerifyCommericalIdProps {
  setStep: (nextStep: string) => void;
  nextStep: string;
}

const VerifyCommericalId: React.FunctionComponent<VerifyCommericalIdProps> = ({
  setStep,
  nextStep,
}) => {
  const changeStepHandler = () => {
    setStep(nextStep);
  };
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-6">
        <div className="rounded-full bg-Gray-25 shadow-sm w-[64px] h-[64px] p-[10px] flex justify-center items-center">
          <img src={"/svg/sign-in/file-plus.svg"} alt={"filePlus"} />
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
            Verify your commercial ID
          </p>
          <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
            Upload a picture of your ID card
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col item-start gap-6 w-full">
            <div className="w-full flex flex-col justify-between items-start gap-1.5">
              <Label>Document Issuing Country</Label>
              <CustomSelect
                placeholder="Select country"
                values={["er", "err"]}
                TriggerClassName=""
                label="Select country"
              />
            </div>
            <div className="flex w-full flex-col flex-start gap-4 border border-Gray-200 rounded-lg p-6">
              <div className="gap-4 flex flex-col justify-center items-center">
                <div className="shadow-xs bg-Base-White border border-Gray-200 rounded-md flex justify-center items-center p-2.5 w-10 h-10">
                  <img
                    src={"/svg/global/upload-cloud.svg"}
                    alt={"upload"}
                    className="flex items-center justify-center"
                  />
                </div>
                <div>
                  <p className="text-Brand-700">
                    Click to upload{" "}
                    <span className="text-Gray-600">or drag and drop</span>
                  </p>
                  <p className="text-Gray-600 font-sm leadig-5">
                    SVG, PNG,JPG or GIF (max. 800X400px)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <img
              src={"/svg/global/info-circle.svg"}
              alt="info"
              className={"flex justify-between items-center"}
            />
            <Link
              to="/"
              className="underline self-start font-[460] leading-5 text-Gray-500 "
            >
              Why do we need this?
            </Link>
          </div>
        </div>
      </div>
      <Button
        type="button"
        onClick={changeStepHandler}
        className="flex bg-Brand-600 text-Base-White w-full"
      >
        Send
      </Button>
    </div>
  );
};

export default VerifyCommericalId;
