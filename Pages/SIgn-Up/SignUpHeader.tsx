import React from "react";
import Image from "next/image";
import PersonalDetails from "../../Assets/SVGs/SIgnUp/PersonalDetails.svg";
import KitchenDetails from "../../Assets/SVGs/SIgnUp/KitchenDetails.svg";
import WalletDetails from "../../Assets/SVGs/SIgnUp/WalletDetails.svg";

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
      <span className="h-[9.75rem] w-full py-6 flex justify-center items-center">
        <ul className=" h-[6.75rem] w-[63rem] p-2 flex items-center justify-between">
          {Elements.map((element, idx) => (
            <li
              key={idx}
              className="flex justify-between flex-col items-center h-full"
            >
              <div className="w-10 h-10 border bg-Base-White border-gray-200 border-solid rounded-lg flex justify-center items-center">
                <Image
                  src={element.image}
                  alt={element.Content1}
                  className="w-5 h-5"
                />
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-Text-sm font-md text-gray-800">
                  {element.Content1}
                </p>
                <p className="font-[440] text-Text-sm h-5 text-gray-600">
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
