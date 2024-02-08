import { Input } from "@/components/ui/input";
import { FC } from "react";
import CustomSelect from "./CustomSelect";

const PercentValue: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`flex items-center border border-Gray-300 p-0 rounded-lg ${className}`}
    >
      <div className="flex gap-2 items-center py-[10px] pl-[14px] flex-grow justify-between">
        <p className="p-0 text-Gray-600 leading-6 font-normal text-Text-md">
          %
        </p>
        <Input type="number" className="p-0 w-full h-6 border-none flex-grow" />
      </div>
      <div className="">
        <CustomSelect
          label="Type"
          placeholder="Type"
          values={["Percentage", "Value"]}
          TriggerClassName="border-none"
        />
      </div>
    </div>
  );
};

export default PercentValue;
