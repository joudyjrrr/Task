import React from "react";
import Title from "../custom/MultiSelect/Title";
import Details from "../custom/Details";
import Badge from "../custom/Badge";

const PromotionDetails = () => {
  return (
    <div className="flex flex-col gap-8 px-[2.5rem] py-12 items-start w-full">
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

      <div className="flex flex-col">
        <Details
          details={[
            {
              title: "Promotion",
              children: (
                <div>
                  <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                    “Savor the savings! Get an appetizing 20% off on your next
                    FlavorExpress order.
                  </p>
                  <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                    Happy dining!”
                  </p>
                </div>
              ),
            },
            {
              title: "Categories",
              children: (
                <div className="flex gap-2">
                  <Badge
                    text="Hamburgers"
                    textColor="text-gray-700"
                    BgclassName="bg-white border border-gray-300"
                  />
                  <Badge
                    text="Beverages"
                    textColor="text-gray-700"
                    BgclassName="bg-white border border-gray-300"
                  />
                </div>
              ),
            },
            {
              title: "  End Time",
              children: (
                <p className="text-gray-800 font-[440] text-Text-md leading-6 ">
                  09/03/2023 – 22:00
                </p>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PromotionDetails;
