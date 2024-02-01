import React from "react";
import Image from "next/image";
import SignUpHeader from "./SignUpHeader";
import Humy from "../../Assets/SVGs/Humy.svg";
import SignUpForm from "./SignUpForm";
const SignUp = () => {
  return (
    <div className="w-full hight-full bg-Gray-25 ">
      <SignUpHeader />
      <div className="mt-[4.313rem] w-full">
        <div
          className={`w-[480px] m-auto bg-Base-White p-10 bg-[url(../../Assets/Images/Sign_Up/Background.png)] bg-no-repeat bg-top rounded-[0.625rem] shadow-sm flex flex-col items-center`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-Brand-25 w-[64px] h-[64px] p-[10px] flex justify-center items-center">
              <Image src={Humy} alt={"Humy"} />
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="flex items-center justify-center text-Text-sm text-gray-950 font-medium leading-8">
                Create your Humy account
              </p>
              <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[480] leading-8">
                Sign up to get started
              </p>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
