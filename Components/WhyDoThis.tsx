import React from "react";
import Image from "next/image";
import Link from "next/link";
import info from "../Assets/SVGs/info-circle.svg";
const WhyDoThis = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <Image
          src={info}
          alt="info"
          className={"flex justify-between items-center"}
        />
        <Link
          href="/"
          className="underline self-start font-[460] leading-5 text-Gray-500 "
        >
          Why do we need this?
        </Link>
      </div>
    </>
  );
};

export default WhyDoThis;
