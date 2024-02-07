import React, { FC } from "react";
import { Input } from "../../ui/input";

const SearchInput: FC<{ placeholder?: string }> = ({ placeholder }) => {
  return (
    <div className="border rounded-radius_md flex items-center justify-between gap-2 px-[14px] py-[10px] h-11">
      <img
        src={"/"}
        alt={"search"}
        className="justify-center flex items-center"
      />
      <Input
        className="justify-start p-0 border-none shadow-none !outline-none !focus:outline-none text-Gray-500"
        placeholder={placeholder ?? "Search"}
      />
    </div>
  );
};

export default SearchInput;
