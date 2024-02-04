import React, { FC } from "react";
import upload from "../Assets/SVGs/upload-cloud-02.svg";
import Image from "next/image";
const DragDrop: FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <div
        className={`gap-4 flex flex-col justify-center items-center border border-Gray-200 rounded-xl p-6 w-full${className}`}
      >
        <div className="shadow-xs bg-Base-White border border-Gray-200 rounded-md flex justify-center items-center p-2.5 w-10 h-10">
          <Image
            src={upload}
            alt={"upload"}
            className="flex items-center justify-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-center items-center gap-1 w-full">
            <p className="text-Brand-700 flex items-center justify-center">
              Click to upload{" "}
            </p>
            <span className="text-Gray-600 flex items-center justify-center">
              or drag and drop
            </span>
          </div>
          <p className="text-Gray-600 font-sm leadig-5 w-full flex justify-center items-center">
            SVG, PNG,JPG or GIF (max. 800X400px)
          </p>
        </div>
      </div>
    </>
  );
};

export default DragDrop;
