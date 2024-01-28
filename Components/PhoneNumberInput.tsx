import React, { InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomSelect from "./CustomSelect";

interface Type extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const PhoneNumberInput: React.FC<Type> = ({ label, placeholder }) => {
  return (
    <>
      <Label>{label}</Label>
      <div className="border rounded-radius_md flex h-[2.75rem] items-center gap-2">
        <CustomSelect
          TriggerClassName="w-[3.5rem] py-[0.625rem] pl-[0.875rem] shadow-none pr-0 border-0 drop-shadow-none outline-none font-medium text-gray-700"
          label="Us"
          values={["t", "t", "t", "t"]}
        />
        <Input
          className="border-none shadow-none !outline-none !fne-none"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
