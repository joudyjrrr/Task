import React from "react";
import home from "../../../../public/svg/global/home-line.svg";
import arrow from "../../../../public/svg/global/arrow-right.svg";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Type {
  label: string;
  Link: string;
}

const Path: React.FC<{ links: Type[] }> = ({ links }) => {
  return (
    <div className="h-7 flex gap-2 items-center">
      <Link to={"/"} className="w-5 h-5 flex justify-center items-center">
        <img
          src={home}
          alt="home"
          className="flex just ify-center items-center"
        />
      </Link>
      <img
        src={arrow}
        alt="arrow"
        className="flex justify-center items-center"
      />
      {links.map((link, idx) => {
        return (
          <div className="flex h-7 gap-2 items-center">
            <Link
              to={link.Link}
              className="h-5 flex justify-center items-center w-fit"
            >
              <Button
                className={`shadow-none border-none rounded-md py-1 px-2 ${
                  idx + 1 === links.length ? "bg-gray-50" : ""
                } text-gray-700 flex items-center justify-center font-semibold leading-5 text-Text-sm`}
              >
                {link.label}
              </Button>
            </Link>
            {idx + 1 !== links.length && <img src={arrow} alt="arrow" />}
          </div>
        );
      })}
    </div>
  );
};

export default Path;
