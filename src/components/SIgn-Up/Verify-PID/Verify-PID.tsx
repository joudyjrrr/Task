import React from "react";
import Image from "next/image";
import SignUpHeader from "../SignUpHeader";
import user from "../../../Assets/SVGs/image-user-plus.svg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomSelect from "../../../Components/CustomSelect";
import upload from "../../../Assets/SVGs/upload-cloud-02.svg";
import info from "../../../Assets/SVGs/info-circle.svg";
import PNG from "../../../Assets/SVGs/pngPage.svg";
import Trash from "../../../Assets/SVGs/trash.svg";
import Link from "next/link";
import SVGBackGround from "../../../Components/SVGBackGround";
const VerifyID = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-8">
        <SignUpHeader />
        <div className="w-full">
          <div
            className={`flex p-8 flex-col items-center gap-12 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            <div className="flex flex-col justify-between items-center gap-6">
              <SVGBackGround src={user} alt="user" />
              <div className="flex flex-col items-center justify-between">
                <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
                  Verify your personal ID
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
                  <div className="flex w-full flex-col flex-start gap-4 ">
                    <div className="gap-4 flex flex-col justify-center items-center border border-Gray-200 rounded-md p-6">
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
                    <div className="flex p-4 items-center gap-3 border border-Gray-200 rounded-xl">
                      <Image src={PNG} alt="png" className="self-start" />
                      <div className="">
                        <span className="flex justify-between items">
                          <p className="text-Gray-700 text-[0.875rem] font-sm leading-5">
                            id-card.png
                          </p>
                          <Button className="p-2 !border-none !shadow-none bg-transparent">
                            <Image
                              src={Trash}
                              alt="trach"
                              className="text-Gray-500"
                            />
                          </Button>
                        </span>
                        <p className="text-Gray-600 leading-5 font-sm text-[0.875rem]">
                          200 KB
                        </p>
                        <div className="flex justify-between items-center gap-3">
                          <span className="w-[17.1875rem] h-2 flex-shrink rounded-[0.25rem] bg-Gray-200">
                            <span className="w-[10%] flex h-full rounded-[0.25rem] bg-Brand-600 "></span>
                          </span>
                          <p className="text-Gray-700 text-[0.875rem] font-md leading-5">
                            10%
                          </p>
                        </div>
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

export default VerifyID;
