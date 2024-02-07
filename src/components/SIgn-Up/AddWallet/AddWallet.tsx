import React from "react";
import SignUpHeader from "../SignUpHeader";
import SVGBackGround from "../../../Components/SVGBackGround";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import wallet from "../../../Assets/SVGs/WalletDetails.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CustomSelect from "../../../Components/CustomSelect";

const AddWallet = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-[6.4375rem]">
        <SignUpHeader />
        <div className="w-full">
          {/* card */}
          <div
            className={`flex p-8 flex-col items-center gap-10 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            {/* first */}
          
          </div>
        </div>
      </div>
    </>
  );
};
export default AddWallet;
