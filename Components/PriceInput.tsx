import React, { InputHTMLAttributes } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import email from "../Assets/SVGs/mail.svg";
import dollar from "../Assets/SVGs/SDollar.svg";

interface Type extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  className?: string;
}

const PriceInput: React.FC<Type> = ({ label, placeholder, className }) => {
  return (
    <>
      <Label>{label}</Label>
      <div className={`flex items-center border border-Gray-300 rounded-md ${className}`}>
        <div className="flex py-[10px] pl-[14px] gap-2 w-full items-center">
          <Image
            src={dollar}
            alt={"dollar"}
            className="w-[10px] h-6 justify-center flex items-center p-0"
          />
          <Input
            type="number"
            className="justify-start border-none shadow-none !outline-none !focus:outline-none text-Gray-500 p-0 h-6"
            placeholder={placeholder}
          />
        </div>
        <p className="text-Gray-700 text-Text-md font-normal leading-6 py-[10px] px-[14px]">
          USD
        </p>
      </div>
    </>
  );
};

export default PriceInput;
