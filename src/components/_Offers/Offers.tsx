import React from "react";
import KitchenTable from "./KitchenTable";
import HumyTable from "./HumyTable";
import Add from "../../Assets/SVGs/Dashboard/Icon(5).svg";
import { Button } from "@/components/ui/button";
import Title from "../custom/Title";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="pt-12 pl-2 w-full">
      <div className=" flex flex-col gap-10 w-full px-4">
        <Title
          Title="Offers"
          SubTitle="All offers created by you."
          links={[{ Link: "Offers", label: "Offers" }]}
        >
          <Link to={"Offers/AddOffer1"} className="">
            <Button className="border border-gray-300  text-gray-700 shadow-none ">
              <img src={Add} alt="" className="w-4 h-4" /> Add coupons
            </Button>
          </Link>
        </Title>

        <div className="gap-6 px-16 flex flex-col">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-Gray-950 leading-5 font-semibold text-Text-sm">
                Your kitchen's offers
              </p>
              <p className="font-normal leadin g-5 text-Text-sm text-Gray-600">
                Promotions added by you for general purchases and/or for your
                various items.
              </p>
            </div>
            <div>
              <KitchenTable />
            </div>
          </div>
          <p className="w-full bg-Gray-200 h-[1px]" />

          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-Gray-950 leading-5 font-semibold text-Text-sm">
                Humy's offers
              </p>
              <p className="font-normal leadin g-5 text-Text-sm text-Gray-600">
                Humy's offers for your kitchen
              </p>
            </div>
            <div>
              <HumyTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
