"use client";
import React, { FC, useRef, useState } from "react";

const DragDrop: FC<{ className?: string }> = ({ className }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string>();
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImg(URL.createObjectURL(file!));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setImg(URL.createObjectURL(file!));
  };

  return (
    <>
      <div
        className={`gap-4 flex flex-col justify-center items-center border border-Gray-200 rounded-xl p-6 w-full${className}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div
          className="shadow-xs bg-Base-White border border-Gray-200 rounded-md flex justify-center items-center p-2.5 w-10 h-10"
          onClick={handleUploadClick}
        >
          <img
            src={"/svg/global/upload-cloud.svg"}
            alt={"upload"}
            className="flex items-center justify-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {img && (
            <img
              src={img!}
              height={40}
              alt={"upload"}
              width={40}
              className="flex items-center justify-center"
            />
          )}
          <div className="flex justify-center items-center gap-1 w-full">
            <p
              className="text-Brand-700 flex items-center justify-center cursor-default"
              onClick={() => fileInputRef.current?.click()}
            >
              Click to upload{" "}
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden cursor-pointer w-full h-full"
            />
            <span className="text-Gray-600 flex items-center justify-center">
              or drag and drop
            </span>
          </div>
          <p className="text-Gray-600 font-sm leadig-5 w-full flex justify-center items-center">
            SVG, PNG, JPG or GIF (max. 800X400px)
          </p>
        </div>
      </div>
    </>
  );
};

export default DragDrop;
