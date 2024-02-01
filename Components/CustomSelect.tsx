import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect: React.FC<{
  placeholder?: string;
  label?: string;
  values: string[];
  children?: ReactNode;
  TriggerClassName?: string;
}> = ({ values, label, TriggerClassName, placeholder, children }) => {
  return (
    <>
      <Select>
        <SelectTrigger className={`${TriggerClassName} border border-gray-300`}>
          <SelectValue placeholder={placeholder} />
          {children}
        </SelectTrigger>
        <SelectContent className="bg-Base-White">
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {values.map((value) => {
              return <SelectItem value={value}>{value}</SelectItem>;
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default CustomSelect;
