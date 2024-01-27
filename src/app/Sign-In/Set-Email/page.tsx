import React from "react";
import Mail from "../../../../Assets/SVGs/SingIn/mail-01.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="w-full justify-center h-screen flex  p-0">
      <div className="flex   pb-12 flex-col pt-24 gap-8 max-w-[24rem] h-full">
        <div className="flex flex-col items-center text-center justify-center  gap-6 self-stretch bg-header-forget-bassword bg-cover bg-center">
          <Image src={Mail} alt="" className="" />
          <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
            Check your email
          </h1>
          <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
            We sent a verification link to olivia@untitledui.com
          </p>
        </div>
        <form className="flex flex-col gap-8 w-full">
          <div className="flex gap-2">
            <Input className="flex w-20 h-20 p-2 justify-center rounded-[0.625rem] border border-Brand-600 shadow-sm text-Brand-600 text-center text-[3rem] font-md leading-[3.75rem] tracking-[-0.06rem]" />
            <Input className="flex w-20 h-20 p-2 justify-center rounded-[0.625rem] border border-Brand-600 shadow-sm text-Brand-600 text-center text-[3rem] font-md leading-[3.75rem] tracking-[-0.06rem]" />
            <Input className="flex w-20 h-20 p-2 justify-center rounded-[0.625rem] border border-Brand-600 shadow-sm text-Brand-600 text-center text-[3rem] font-md leading-[3.75rem] tracking-[-0.06rem]" />
            <Input className="flex w-20 h-20 p-2 justify-center rounded-[0.625rem] border border-Brand-600 shadow-sm text-Brand-600 text-center text-[3rem] font-md leading-[3.75rem] tracking-[-0.06rem]" />
          </div>
          <Button className=" w-100 text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm">
            Enter code manually
          </Button>
        </form>
        <div className="flex gap-1 justify-center">
          <p className="text-gray-600 text-Text-sm  font-xs leading-5 self-stretch">
            Didn’t receive the email?
          </p>
          <a className="text-Brand-700  text-Text-sm  font-md leading-5">Click to resend</a>
        </div>
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
      </div>
    </div>
  );
};

export default page;
