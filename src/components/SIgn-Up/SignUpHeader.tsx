import React from "react";
import Image from "next/image";
import PersonalDetails from "../../Assets/SVGs/PersonalDetails.svg";
import KitchenDetails from "../../Assets/SVGs/KitchenDetails.svg";
import WalletDetails from "../../Assets/SVGs/WalletDetails.svg";
import SVGBackGround from "../../Components/SVGBackGround";

const Elements = [
  {
    image: PersonalDetails,
    Content1: "Personal details",
    Content2: "we'd like to get to know you",
  },
  {
    image: KitchenDetails,
    Content1: "Kitchen details",
    Content2: "Your kitchen and items",
  },
  {
    image: WalletDetails,
    Content1: "Wallet details",
    Content2: "To receive your payment",
  },
];

const SignUpHeader = () => {
  return (
    <div className="w-full h-full">
      <span className=" w-full py-6 flex flex-col justify-center items-center">
        <ul className="p-2 flex items-start justify-between gap-4">
          {Elements.map((element, idx) => (
            <li
              key={idx}
              className="flex flex-col w-80 items-center gap-3 flex-shrink-0"
            >
              <div
                className={`relative z-40 after:content-[' '] ${
                  idx === 2 ? "" : "after:absolute"
                } after:top-[calc(50%-1px)] after:left-1/2 after:h-0.5 after:w-[21rem] after:bg-[#EAECF0] after:-z-10`}
              >
                <SVGBackGround src={element.image} alt={element.image} />
              </div>
              <div className="">
                <p className="font-semibold leading-5 text-Text-sm text-gray-800 text-center">
                  {element.Content1}
                </p>
                <p className="font-[440] leading-5 text-gray-600 text-Text-sm">
                  {element.Content2}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default SignUpHeader;
