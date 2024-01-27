import React from "react";
import Lock from "../../../../Assets/SVGs/SingIn/lock-01.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Check from "../../../../Assets/SVGs/SingIn/Check icon.svg";
const page = () => {
  return (
    <div className="w-full justify-center h-screen flex  p-0">
      <div className="flex  px-8 pb-12 flex-col pt-24 gap-8 max-w-[22.5rem] h-full">
        <div className="flex flex-col items-center text-center gap-6 self-stretch bg-header-forget-bassword bg-cover bg-center">
          <div className="w-[3.5rem] h-[3.5rem] p-[0.875rem] flex justify-center items-center rounded-radius_xl border border-gray-200 shadow-sm">
            <Image src={Lock} alt="key" className="" />
          </div>
          <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
            Set new password
          </h1>
          <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
            Your new password must be different to previously used passwords.
          </p>
        </div>
        <form className="w-full flex flex-col gap-6">
          <div>
            <Label>Password</Label>
            <Input placeholder="Password" />
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input placeholder="Confirm Password" />
          </div>
          <div className="flex flex-col gap-[0.75rem] w-full">
            <div className="flex gap-2 ">
              <Image src={Check} alt="key" className="" />
              <p className=" text-gray-600 text-Text-sm font-xs leading-5">
                Must be at least 8 characters
              </p>
            </div>
            <div className="flex gap-2 ">
              <Image src={Check} alt="key" className="" />
              <p className=" text-gray-600 text-Text-sm font-xs leading-5">
                Must contain one special character
              </p>
            </div>
          </div>
          <Button className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm">
            Submit
          </Button>

          <a className="cursor-pointer w-full flex  justify-center items-center gap-[0.375rem]  text-gray-600 text-Text-sm font-md leading-5">
            <svg
              className="w-[1.25rem] h-[1.25rem]"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3332 10H4.6665M4.6665 10L10.4998 15.8333M4.6665 10L10.4998 4.16667"
                stroke="#475467"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to log in
          </a>
        </form>
      </div>
    </div>
  );
};

export default page;
