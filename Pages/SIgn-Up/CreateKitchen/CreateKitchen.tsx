import React from "react";
import SignUpHeader from "../SignUpHeader";
import SVGBackGround from "../../../Components/SVGBackGround";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import kitchen from "../../../Assets/SVGs/KitchenDetails.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomSelect from "../../../Components/CustomSelect";
import user from "../../../Assets/SVGs/PersonalDetails.svg";
import DragDrop from "../../../Components/DragDrop";
import { Textarea } from "@/components/ui/textarea";
import upload from "../../../Assets/SVGs/upload-cloud-02.svg";
const CreateKitchen = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-8">
        <SignUpHeader />
        <div className="w-full">
          {/* card */}
          <div
            className={`flex p-8 flex-col items-center gap-10 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            {/* first */}
            <div className="flex flex-col justify-between items-center gap-6 ">
              <SVGBackGround
                src={kitchen}
                alt="kitchen"
                svgClassName="fill-gray-950"
              />

              <div className="flex flex-col items-center justify-between ">
                <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
                  Add Wallet
                </p>
                <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
                  We will need it to transfer the payment to you
                </p>
              </div>
            </div>
            {/* second */}
            <form action="">
              <div className="flex-col flex items-start justify-between gap-10 w-full">
                {/* first */}
                <div className="w-full flex flex-col items-start justify-between gap-6">
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>Chef Picture</Label>
                    <div className="flex gap-4 justify-between items-center w-full">
                      <div className="bg-gray-50 flex-shrink-0 w-22 h-22 flex justify-center items-center rounded-full border ">
                        <Image className="w-11 h-11" src={user} alt="user" />
                      </div>
                      <div className="p-6 flex flex-col justify-between items-center w-full gap-4 border border-gray-200 rounded-xl">
                        <SVGBackGround
                          src={upload}
                          alt="upload"
                          className="bg-white upload"
                        />
                        <div className="flex flex-col justify-between items-center w-full gap-1">
                          <span className="flex justify-evenly items-center gap-1">
                            <p className="flex justify-evenly items-center text-Brand-300 font-semibold text-sm">
                              Click to upload
                            </p>
                            <p className="flex justify-evenly items-center text-gray-600 font-normal text-sm">
                              or drag and drop
                            </p>
                          </span>
                          <span className="text-gray-600 flex items-center justify-center font-normal text-center text-sm">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>Kitchen Logo</Label>
                    <DragDrop />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>Kitchen Name</Label>
                    <Input placeholder="Give your kitchen a name" />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>About Kitchen</Label>
                    <Textarea
                      placeholder="Tell us about your kitchen"
                      className="resize-none py-3 px-3.5"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>Menu URL</Label>
                    <Input placeholder="Give your kitchen a url" />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-[6px] w-full">
                    <Label>
                      Courier Name(s){" "}
                      <span className="text-gray-400">(Optional)</span>
                    </Label>
                    <Input placeholder="Who will carry your food?" />
                  </div>
                </div>
                {/* second */}
                <Button className="bg-Brand-600 w-full text-Base-White w-full py-[10px] px-4 shadow-xs rounded-lg border border-Brand-600">
                  Create Kitchen
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateKitchen;
