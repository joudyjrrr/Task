import React from "react";
import Image from "next/image";
import SignUpHeader from "../SignUpHeader";
import filePlus from "../../../Assets/SVGs/file-plus.svg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomSelect from "../../../Components/CustomSelect";
import upload from "../../../Assets/SVGs/upload-cloud-02.svg";
import info from "../../../Assets/SVGs/info-circle.svg";
import Link from "next/link";

const VerifyCID = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-[3.125rem]">
        <SignUpHeader />
        <div className="w-full">
          <div
            className={`flex p-8 flex-col items-center gap-12 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            <div className="flex flex-col justify-between items-center gap-6">
              <div className="rounded-full bg-Gray-25 shadow-sm w-[64px] h-[64px] p-[10px] flex justify-center items-center">
                <Image src={filePlus} alt={"filePlus"} />
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
                        <Image
                          src={upload}
                          alt={"upload"}
                          className="flex items-center justify-center"
                        />
                      </div>
                      <div>
                        <p className="text-Brand-700">
                          Click to upload{" "}
                          <span className="text-Gray-600">
                            or drag and drop
                          </span>
                        </p>
                        <p className="text-Gray-600 font-sm leadig-5">
                          SVG, PNG,JPG or GIF (max. 800X400px)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <Image
                    src={info}
                    alt="info"
                    className={"flex justify-between items-center"}
                  />
                  <Link
                    href="/"
                    className="underline self-start font-[460] leading-5 text-Gray-500 "
                  >
                    Why do we need this?
                  </Link>
                </div>
              </div>
            </div>
            <Button className="flex bg-Brand-600 text-Base-White w-full">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCID;
