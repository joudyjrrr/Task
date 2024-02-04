import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import goldStar from "../../Assets/SVGs/Dashboard/goldStar.svg";
import grayStar from "../../Assets/SVGs/Dashboard/Star background(1).svg";
import halfGoldStar from "../../Assets/SVGs/Dashboard/halfGoldStar.svg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import CompensateModal from "./CompensateModal";
import RespondModal from "./RespondModal";
const FeedBackDetails = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex ">
          <div className="flex flex-grow gap-5 items-start  w-full">
            <Title
              Title="Customer Feedback"
              SubTitle="See customer reviews about the kitchen"
              links={[
                { Link: "/Feedbacks", label: "Feedbacks" },
                { Link: "/Feedbacks-details", label: "Order#24535" },
              ]}
            />
            <div className="flex  gap-3">
                <RespondModal/>
              <CompensateModal />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-8 py-8 border-b border-gray-200">
            <div className="flex flex-col">
              <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                Feedback
              </p>
              <p className="text-gray-600 font-xs text-Text-sm leading-5 ">
                Customer’s comment
              </p>
            </div>
            <div>
              {" "}
              <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                “The hamburger I ordered was overcooked and dry, the service was
                slow,
              </p>
              <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                and the overall experience was disappointing.”
              </p>
            </div>
          </div>

          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 basis-[15%]">
              Order
            </p>
            <div className="flex gap-2">
              <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                  1x BBQ Burger
                </p>
              </div>
              <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                  Chicken Fries
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 basis-[15%]">
              Rating
            </p>
            <div className="flex ">
              <Image src={goldStar} alt="" className="w-5 h-5 text-red" />
              <Image src={halfGoldStar} alt="" className="w-5 h-5" />
              <Image src={grayStar} alt="" className="w-5 h-5" />
              <Image src={grayStar} alt="" className="w-5 h-5" />
              <Image src={grayStar} alt="" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 basis-[15%]">
              Date of Order
            </p>
            <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
              <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                09/03/2023 – 22:00
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackDetails;
