import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import goldStar from "../../Assets/SVGs/Dashboard/goldStar.svg";
import garyStar from "../../Assets/SVGs/Dashboard/Star background(1).svg";
import Image from "next/image";

const CouriersDetails = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2 ">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <Title
              Title="Courier Details"
              SubTitle="View order’s customer details"
              links={[
                { Link: "/Courier", label: "Couriers" },
                { Link: "/Courier-details", label: "Courier Details" },
              ]}
            />

            <div className="flex flex-col">
              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Courier’s Name
                </p>
                <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                  Arda Mete
                </p>
              </div>
              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Phone Number
                </p>
                <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                  +1 (555) 000-0000
                </p>
              </div>
              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  E-mail
                </p>
                <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                  olivia@untitledui.com
                </p>
              </div>
              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Delivery Destinationsv
                </p>
                <div className="flex gap-2">
                  <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                    <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                      Kadıköy
                    </p>
                  </div>
                  <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                    <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                      Maltepe
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Rating
                </p>
                <div className="flex">
                  <Image src={goldStar} alt="" />
                  <Image src={goldStar} alt="" />
                  <Image src={goldStar} alt="" />
                  <Image src={goldStar} alt="" />
                  <Image src={garyStar} alt="" />
                </div>
              </div>

              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Date of Birth
                </p>
                <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                  09/03/2001
                </p>
              </div>

              <div className="flex gap-8 py-8 border-b border-gray-200">
                <p className="text-gray-700 font-md text-Text-sm leading-5 ">
                  Driver’s License
                </p>
                <div className="flex gap-3 p-4 border border-gray-200  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouriersDetails;
