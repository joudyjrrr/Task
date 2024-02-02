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
            <div className="flex flex-col justify-between items-center gap-6">
              <SVGBackGround src={wallet} alt="wallet" />
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
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
                <Label>Bank Name</Label>
                <CustomSelect
                  values={["1", "2", "3"]}
                  TriggerClassName=""
                  placeholder="Select a Bank"
                  label="Select a Bank"
                />
              </div>
              <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
                <Label>IBAN</Label>
                <Input placeholder="TR330...." />
              </div>
              <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
                <Label>Account Number</Label>
                <Input placeholder="01234..." />
              </div>
              <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
                <Label>Account Holder Name</Label>
                <Input placeholder="Full legal Name" />
              </div>
            </div>
            {/* third */}
            <Button className="bg-Brand-600 text-Base-White w-full py-[10px] px-4 shadow-xs rounded-lg border border-Brand-600">
              Add Wallet
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddWallet;
