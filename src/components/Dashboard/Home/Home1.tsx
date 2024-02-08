import Title from "@/components/custom/Title";
import Massege from "../../../../public/svg/global/message-notification-circle.svg";
import ActiveOrders from "./Components/ActiveOrders";
import CardSupport from "./Components/CardSupport";
import CardsHome from "./Components/CardsHome";

import { Button } from "@/components/ui/button";
const Home1 = () => {
  return (
    <div className="   w-full  py-12 h-full">
      <CardSupport />
      <div className="flex flex-col pb-8 gap-8 items-start mr-28 ">
        <div className="flex w-full">
          <Title
            links={[
              { Link: "/dashboard", label: "Dashboard" },
              { Link: "/overview", label: "Overview" },
            ]}
            Title="  Welcome back, Olivia"
            SubTitle="  Your current sales summary and activity."
          />
          <Button color="" className="bg-white border border-gray-200 text-gray-700  font-md text-sm gap-3"> <img src={Massege} className="w-5 h-5"/> View Notifications </Button>
        </div>
        <CardsHome />
        <ActiveOrders />
      </div>
    </div>
  );
};

export default Home1;
