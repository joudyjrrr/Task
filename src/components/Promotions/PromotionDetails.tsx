import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
const PromotionDetails = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <Title
              Title="Promotions"
              SubTitle="All promotions suggested by Humy"
              links={[
                { Link: "/promotions", label: "Promotions" },
                { Link: "/Promotion Details", label: "Promotion Details" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 ">
              Promotion
            </p>
            <div>
              {" "}
              <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                “Savor the savings! Get an appetizing 20% off on your next
                FlavorExpress order.
              </p>
              <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                Happy dining!”
              </p>
            </div>
          </div>

          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 ">
              Categories
            </p>
            <div className="flex gap-2">
              <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                  Hamburgers
                </p>
              </div>
              <div className="py-1 px-[0.625rem]  text-center flex justify-center rounded-md border border-gray-300">
                <p className="text-gray-700 font-sm text-Text-sm leading-5 ">
                  Beverages
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 py-8 border-b border-gray-200">
            <p className="text-gray-700 font-md text-Text-sm leading-5 ">
              End Time
            </p>
            <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
              09/03/2023 – 22:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetails;
