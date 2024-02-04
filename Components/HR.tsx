import React, { FC, ReactNode } from "react";

const HR: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="flex items-center gap-2 font-medium leading-6 text-Gray-600 text-Text-sm">
      <hr className="h-[1px] flex-grow bg-gray-300" />
      {children}
      <hr className="h-[1px] flex-grow bg-gray-300" />
    </span>
  );
};

export default HR;
