import React, { FC } from "react";
import Path from "./Path";

interface Type {
  Link: string;
  label: string;
}

const Title: FC<{
  links: Type[];
  Title: string;
  SubTitle: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ links, Title, SubTitle, children, className }) => {
  return (
    <>
      <div className="flex flex-col gap-6  w-full">
        <div
          className={`flex flex-col gap-5 !border-b border-gray-200 pb-4 w-full ${className}`}
        >
          <Path links={links} />
          <div className="gap-4 flex justify-between items-start w-full">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-Gray-950 leading-[38px] font-semibold text-Display-sm">
                {Title}
              </p>
              <p className="font-[460] text-Gray-500 leading-6">{SubTitle}</p>
            </div>
            <div className="flex justify-end items-start">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
