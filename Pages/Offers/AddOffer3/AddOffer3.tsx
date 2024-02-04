import React from "react";
import Title from "../../../Components/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = [
  { label: "Offers", Link: "/Offers" },
  { label: "Add Offer", Link: "/Offers/Add-Offer" },
];

const AddOffer3 = () => {
  return (
    <div className="pt-12 px-16 w-full flex flex-col">
      <div className=" flex flex-col gap-8 w-full px-4">
        <Title
          Title="Add Offer"
          SubTitle="Review your offer before adding it"
          links={links}
        />
        <div className="flex flex-col gap-8 w-[45.5rem]">
          <div className="flex flex-col w-full shadow-sm">
            <span className="bg-Gray-200 h-[217px] w-full rounded-t-lg" />
            <span className="p-4 gap-[2px] bg-gray-50 flex-col flex justify-center items-center">
              <p className="text-gray-900">Weekend Delight</p>
              <p className="text-gray-400">
                Enjoy weekends with a special 15% discount
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">DISCONT</p>
              <p className="text-gray-900 leading-6 font-medium">%15</p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">ITEMS</p>
              <p className="text-gray-900 leading-6 font-medium">
                BBQ Hamburger, Cheeseburger
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">
                PURCHASE REQUIREMENTS
              </p>
              <p className="text-gray-900 leading-6 font-medium">
                Minimum $25 Order
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">
                PURCHASE REQUIREMENTS
              </p>
              <p className="text-gray-900 leading-6 font-medium">
                500 Customers
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">
                MAXIMUM GENERAL USES
              </p>
              <p className="text-gray-900 leading-6 font-medium">
                One Time Use
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">
                COMBINATIONS
              </p>
              <p className="text-gray-900 leading-6 font-medium">Allowed</p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200">
              <p className="text-gray-400 leading-4 font-medium">START DATE</p>
              <p className="text-gray-900 leading-6 font-medium">
                19-03-2024 - 12:00
              </p>
            </span>
            <span className="flex justify-between items-center p-4 border-b border-b-gray-200 rounded-b-lg">
              <p className="text-gray-400 leading-4 font-medium">FINISH DATE</p>
              <p className="text-gray-900 leading-6 font-medium">
                25-03-2024 - 23:95
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Button className="w-full bg-Brand-600 !text-Base-White font-semibold leading-4 text-Text-md border border-Brand-600">
              Add Offer
            </Button>

            <Link href={"Offers/AddOffer2"}>
              <Button className="w-full bg-white border border-Gray-300 text-Gray-700 font-semibold leading-6 text-Text-md shadow-none">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer3;
