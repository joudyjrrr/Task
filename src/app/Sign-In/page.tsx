"use client";
import React from "react";
import Avatar from "../../../Assets/SVGs/SingIn/Avatar.png";
import Star from "../../../Assets/SVGs/SingIn/Star.svg";
import Logo from "../../../Assets/SVGs/SingIn/humy.svg";
import Group from "../../../Assets/SVGs/SingIn/Group 110.svg";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Ilogin = {
  email: string;
  password: string;
};
const page = () => {
  const form = useForm<Ilogin>();
  const Stars = [
    {
      Img: Star,
    },
    {
      Img: Star,
    },
    {
      Img: Star,
    },
    {
      Img: Star,
    },
    {
      Img: Star,
    },
  ];
  return (
    <div className="flex h-screen w-full items-center ">
      <div className="flex flex-col justify-center items-center flex-1 px-8 flex-shrink-0 flex-grow-0 bg-gray-50 self-stretch">
        <div className="flex absolute top-5 left-5 gap-3">
          <Image alt="Avatr" src={Group} className="w-[1.76569rem] h-8 " />
          <Image alt="Avatr" src={Logo} className="w-[4.44856rem] h-6  mt-2" />
        </div>
        <div className="flex min-w-140  flex-col items-center gap-2  self-stretch text-center text">
          <p className="self-stretch text-gray-700 text-[1.875rem] font-md leading-[2.375rem]">
            We’ve been using Humy to kick start every new project and can’t
            imagine working without it.
          </p>
          <div className="flex flex-col items-center gap-4 self-stretch text-center ">
            <Image
              alt="Avatr"
              src={Avatar}
              className="w-16 h-16 rounded-[12.5rem]"
            />
            <p className="text-gray-900 text-md font-md leading-5 ">
              Pippa Wilkinson
            </p>
            <p className="text-gray-600 text-sm font-sm leading-5 ">
              Head of Design, Layers
            </p>
          </div>
          <div className="flex">
            {Stars.map((d, index) => (
              <Image alt="Star" key={index} src={d.Img} className="w-5 h-5" />
            ))}
          </div>
        </div>
        <p className="absolute left-8 bottom-8 text-gray-600 text-Text-sm font-xs leading-5">
          © Humy 2024
        </p>
      </div>
      <div className="flex flex-col justify-center w-full h-screen">
        <div className="bg-white flex justify-center">
          <div className="flex   flex-col px-8 items-center self-stretch gap-8 text-start">
            <div className=" flex flex-col gap-3">
              <h1 className="text-gray-900 text-Display-sm font-md leading-[2.375rem] self-stretch">
                Welcome back
              </h1>
              <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form className="w-full flex flex-col gap-6">
              <div>
                <Label>Email</Label>
                <Input placeholder="Email" />
              </div>
              <div>
                <Label>Password</Label>
                <Input placeholder="Passwrod" type="password" />
              </div>
              <div className="flex flex-1  items-start gap-[5rem]">
                <div className="flex gap-2 ">
                  <Checkbox className="w-4 h-4 rounded-radius_xs border border-gray-300 " />
                  <p className="text-gray-700 font-sm text-Text-sm leading-5  ">
                    Remember for 30 days
                  </p>
                </div>
                <Link
                  href="Sign-In/Forget-Password"
                  className="text-Brand-700 font-md text-Text-sm leading-5 "
                >
                  Forgot password
                </Link>
              </div>

              <Button className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm">
                Submit
              </Button>
            </form>
            <div className="flex justify-center items-baseline gap-2 ">
              <p className="text-gray-600 text-Text-sm  font-xs leading-5 self-stretch">
                Don’t have an account?
              </p>
              <a className="text-Brand-700 text-Text-sm font-md leading-5 ">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
