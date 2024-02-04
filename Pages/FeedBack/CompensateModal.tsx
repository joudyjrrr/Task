import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heartHand from "../../Assets/SVGs/heartHand.svg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import CustomSelect from "../../Components/CustomSelect";
import { Textarea } from "@/components/ui/textarea";
const CompensateModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button className=" border-Brand-600 bg-Brand-600 text-white">
          Offer Compensation
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg !max-w-[29rem] p-8 flex flex-col gap-[2.5rem] border border-gray-200">
        <DialogHeader className=" flex flex-col gap-6 justify-center items-center">
          <div className="bg-header-forget-bassword w-full justify-center    bg-cover bg-center flex">
            <div className="w-[3.5rem] h-[3.5rem] bg-gray-50 rounded-full shadow-sm flex justify-center items-center ">
              <Image
                src={heartHand}
                alt=""
                className="w-[1.375rem] h-[1.375rem]"
              />
            </div>
          </div>
          <p className="text-gray-950 font-sm text-[1.5rem] leading-6">
            Compensate
          </p>
          <p className="text-gray-400 font-[460] text-[1.5rem] leading-6">
            Send a coupon to your customer
          </p>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label>Discount</Label>
            <CustomSelect
              placeholder="%0"
              values={["One", "Two"]}
              children={
                <p className=" flex flex-grow justify-end">Percentage</p>
              }
            />
          </div>
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label className="flex">
              Message <p className="text-gray-600">(Optional) </p>
            </Label>
            <Textarea placeholder="Send a message to the customer" />
          </div>
        </div>
        <div>
            <div className="flex flex-col gap-3">
                <Button className="bg-Brand-600 text-white">Send Coupon</Button>
                <Button className="border border-gray-300">Cancel</Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompensateModal;
