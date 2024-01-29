import React from "react";

const SVGBackGround: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="rounded-full bg-Gray-25 shadow-sm w-[64px] h-[64px] p-[10px] flex justify-center items-center">
        {children}
      </div>
    </>
  );
};

export default SVGBackGround;
