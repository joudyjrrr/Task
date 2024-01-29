import React from 'react'
import upload from '../Assets/SVGs/upload-cloud-02.svg';
import Image from 'next/image';
const DragDrop = () => {
  return (
    <>
      <div className="gap-4 flex flex-col justify-center items-center border border-Gray-200 rounded-md p-6">
        <div className="shadow-xs bg-Base-White border border-Gray-200 rounded-md flex justify-center items-center p-2.5 w-10 h-10">
          <Image
            src={upload}
            alt={"upload"}
            className="flex items-center justify-center"
          />
        </div>
        <div>
          <p className="text-Brand-700">
            Click to upload{" "}
            <span className="text-Gray-600">or drag and drop</span>
          </p>
          <p className="text-Gray-600 font-sm leadig-5">
            SVG, PNG,JPG or GIF (max. 800X400px)
          </p>
        </div>
      </div>
    </>
  );
}

export default DragDrop