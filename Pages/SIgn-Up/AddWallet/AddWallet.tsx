import React from "react";
import SignUpHeader from "../SignUpHeader";
import SVGBackGround from "../../../Components/SVGBackGround";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import wallet from "../../../Assets/SVGs/WalletDetails.svg";

const AddWallet = () => {
  return (
    <>
      <div className="w-full hight-full bg-Gray-25 flex flex-col justify-between items-center gap-[3.125rem]">
        <SignUpHeader />
        <div className="w-full">
          {/* card */}
          <div
            className={`flex p-8 flex-col items-center gap-12 rounded-[0.625rem] w-[29rem] mx-auto shadow-sm bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top bg-Base-White `}
          >
            {/* first */}
            <div className="flex flex-col justify-between items-center gap-6">
              <SVGBackGround>
                <Image src={wallet} alt={"wallet"} />
              </SVGBackGround>
              <div className="flex flex-col items-center justify-between">
                <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
                  Add Wallet
                </p>
                <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
                  We will need it to transfer the payment to you
                </p>
              </div>
            </div>
            {/* second */}
            <div className=""></div>
            {/* third */}
            <Button className="">Add Wallet</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddWallet;
