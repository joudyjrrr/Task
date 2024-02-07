
import React, { FC } from "react";

const Badge: FC<{
  src?: string ;
  text: string;
  BgclassName: string;
  textColor: string;
  srcClassName?:string;
}> = ({ text, src, BgclassName, textColor  , srcClassName}) => {
  return (
    <div
      className={`flex gap-1 items-center justify-center   text-center rounded-2xl border  py-0.5 pr-[0.625rem] p pl-[0.5rem] ${BgclassName}`}
    >
      {src && <img src={src!} alt="Ar" className={`w-5 h-5 ${srcClassName}`} />}
      <p className={` text-Text-xs font-sm leading-5 ${textColor}`}>{text}</p>
    </div>
  );
};

export default Badge;
