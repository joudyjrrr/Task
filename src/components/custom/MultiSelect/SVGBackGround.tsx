import React from "react";

const SVGBackGround: React.FC<{
  src: string;
  alt: string;
  className?: string;
  svgClassName?: string;
}> = ({ className, src, alt, svgClassName }) => {
  return (
    <>
      <div
        className={`bg-Gray-25 border border-gray-200 rounded-lg shadow-xs w-[40px] h-[40px] p-[10px] flex justify-center items-center ${className}`}
      >
        <img src={src} alt={alt} className={`${svgClassName}`} />
      </div>
    </>
  );
};

export default SVGBackGround;
