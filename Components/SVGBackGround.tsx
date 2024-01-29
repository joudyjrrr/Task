import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const SVGBackGround: React.FC<{
  src: string | StaticImport;
  alt: string;
  className?: string;
  svgClassName? : string,
}> = ({ className, src, alt, svgClassName }) => {
  return (
    <>
      <div
        className={`bg-Gray-25 border border-gray-200 rounded-lg shadow-xs w-[40px] h-[40px] p-[10px] flex justify-center items-center ${className}`}
      >
        <Image src={src} alt={alt} className={`${svgClassName}`}/>
      </div>
    </>
  );
};

export default SVGBackGround;
