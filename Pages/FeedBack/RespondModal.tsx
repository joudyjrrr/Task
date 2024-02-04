"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Massege from "../../Assets/SVGs/Massege.svg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const RespondModal = () => {
  const [rating, setRating] = useState<number | null>();
  const [hover, setHover] = useState<number | null>(null);
  const handleStarClick = (selectedRating: number) => {
    if (rating === selectedRating) {
      setRating(null);
    } else {
      setRating(selectedRating);
    }
  };

  const handleStarHover = (hoveredRating: number | null) => {
    setHover(hoveredRating);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="border border-gray-300">Respond</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg !max-w-[29rem] p-8 flex flex-col gap-[2.5rem] border border-gray-200">
        <DialogHeader className=" flex flex-col gap-6 justify-center items-center">
          <div className="bg-header-forget-bassword w-full justify-center    bg-cover bg-center flex">
            <div className="w-[3.5rem] h-[3.5rem] bg-gray-50 rounded-full shadow-sm flex justify-center items-center ">
              <Image
                src={Massege}
                alt=""
                className="w-[1.375rem] h-[1.375rem]"
              />
            </div>
          </div>
          <p className="text-gray-950 font-sm text-[1.5rem] leading-6">
            Respond to Feedback
          </p>
          <p className="text-gray-400 font-[460] text-[1.5rem] leading-6">
            Reply to Arda M.'s comment
          </p>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label>Rating</Label>
            <div className="flex border-b border-input  border-gray-300 pb-2">
              {[...Array(5)].map((_, index) => {
                const CurentRating = index + 1;
                return (
                  <div className="">
                    <input
                      type="radio"
                      value={CurentRating}
                      onClick={() => setRating(CurentRating)}
                      className="hidden"
                    />
                    <FaStar
                      key={CurentRating}
                      size={32}
                      color={
                        (hover || rating!) >= CurentRating
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                      onClick={() => handleStarClick(CurentRating)}
                      onMouseEnter={() => handleStarHover(CurentRating)}
                      onMouseLeave={() => handleStarHover(null)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label>Feedback</Label>
            <Textarea
              className="border-none border-b border-gray-300"
              rows={3}
            />
          </div>
          <div className="w-full flex flex-col gap-[0.38rem]">
            <Label>Respond</Label>
            <Textarea
              className=""
              placeholder="Write your respond to this feedback"
              rows={3}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <Button className="bg-Brand-600 text-white">Reply</Button>
            <Button className="border border-gray-300">Cancel</Button>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default RespondModal;
