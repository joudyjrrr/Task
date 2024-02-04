import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { FC } from "react";
import join from "../../Assets/SVGs/Dashboard/Featured icon.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const ModelDetails = () => {
  return (
    <Dialog >
      <DialogTrigger>
        {" "}
        <p className="text-Brand-700 text-md leading-5 font-md cursor-pointer">
          Join Offer
        </p>
      </DialogTrigger>
      <DialogContent className="rounded-lg !max-w-[26rem]">
        <DialogHeader className=" flex flex-col gap-4">
          <Image src={join} alt="" className="w-12 h-12" />
          <div className="flex flex-col">
            <DialogTitle className="text-gray-950 font-md text-Text-lg leading-6">
              Are you sure you want to join this promotion?
            </DialogTitle>
            <p className="!text-gray-600 font-xs text-Text-sm leading-5">
              Once you have joined the offer, it is not possible to withdraw it.
            </p>
          </div>
        </DialogHeader>
        <DialogFooter className="w-full flex gap-3 !justify-center">
          <Button className="border border-gray-300">Cancel</Button>
          <Button className="bg-Brand-600 text-white">Confirem</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModelDetails;
