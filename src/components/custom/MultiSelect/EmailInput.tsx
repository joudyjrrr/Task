import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { InputHTMLAttributes } from "react";

interface Type extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}
const EmailInput: React.FC<Type> = ({ label, placeholder }) => {
  return (
    <>
      <Label>{label}</Label>
      <div className="border w-[25rem] h-[2.75rem] rounded-radius_md flex items-center gap-2 px-[0.875rem] py-[0.625rem]">
        <img
          src={'/svg/global/mail.svg'}
          alt={"Email"}
          className="w-5 h-5 justify-center flex items-center"
        />
        <Input
          type="email"
          className="justify-start border-none shadow-none !outline-none !focus:outline-none text-Gray-500"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};


export default EmailInput;
