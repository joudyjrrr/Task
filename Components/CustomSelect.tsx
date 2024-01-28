import React from "react";
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
  label: string;
  values: string[];
  TriggerClassName : string,
}> = ({ values, label, TriggerClassName }) => {
  return (
    <>
      <Select>
        <SelectTrigger className={`${TriggerClassName}`}>
          <SelectValue placeholder="US" />
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
