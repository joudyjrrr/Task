import React from "react";
import Path from "../../Components/Path";
import Title from "../../Components/Title";
import { Button } from "@/components/ui/button";

const Offers = () => {
  return (
    <div className="pt-12 pl-2 w-full">
      <div className=" flex flex-col gap-10 w-full px-4">
        {/* first */}
        <Title
          Title="Offers"
          SubTitle="All offers created by you."
          links={[{ Link: "Offers", label: "Offers" }]}
        />
        {/* second */}
        <div></div>
      </div>
    </div>
  );
};

export default Offers;
