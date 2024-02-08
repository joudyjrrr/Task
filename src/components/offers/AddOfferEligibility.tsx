import { Link } from "react-router-dom";
import HR from "../custom/MultiSelect/HR";
import ProgressBar from "../custom/MultiSelect/ProgressBar";
import Title from "../custom/MultiSelect/Title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const links = [
  { label: "Offers", Link: "/Offers" },
  { label: "Add Offer", Link: "/Offers/Add-Offer" },
];

interface AddOfferEligibilityProps {
  nextStep: string;
  setStep: (nextStep: string) => void;
}

const AddOfferEligibility: React.FunctionComponent<
  AddOfferEligibilityProps
> = ({}) => {
  // const changeStepHandler = () => {
  //   setStep(nextStep);
  // };

  return (
    <div className="pt-12  w-full flex flex-col">
      <div className=" flex flex-col gap-10 w-full px-4">
        <Title
          Title="Add Offer"
          SubTitle="Add a new offer for your kitchen."
          links={links}
        />
        <div className="flex gap-8 ">
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <HR>Eligibility</HR>
                <div className="flex flex-col gap-[6px] w-full">
                  <Label className="w-full flex items-center justify-between">
                    Maximum Uses in General
                    <img src={"/svg/global/info-circle.svg"} alt="info" />
                  </Label>
                  <Input placeholder="Limit number of times this discount can be used" />
                </div>
                <div className="flex flex-col justify-start items-start gap-[6px] w-full">
                  <Label>Purchase Requirements</Label>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger
                        value="oneTimeUse"
                        className="data-[state=active]:rounded-l-lg"
                      >
                        One Time Use
                      </TabsTrigger>
                      <TabsTrigger
                        value="Unlimited"
                        className="data-[state=active]:rounded-r-lg data-[state=active]:border-l-4 data-[state=active]:border-l-red-300"
                      >
                        Unlimited
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <HR>Calendar</HR>
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col justify-between flex-grow gap-[6px]">
                    <Label className="w-full text-gray-700">Start Date</Label>
                    <Input placeholder="Offer Name" />
                  </div>
                  <div className="flex flex-col justify-between flex-grow gap-[6px]">
                    <Label className="w-full text-gray-700">Finish Date</Label>
                    <Input placeholder="Offer Name" />
                  </div>
                </div>
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col flex-grow justify-between gap-[6px]">
                    <Label className="w-full text-gray-700">
                      Finish Date{" "}
                      <span className="text-gray-400">(Optional)</span>
                    </Label>
                    <Input placeholder="Offer Name" />
                  </div>
                  <div className="flex flex-col flex-grow justify-between gap-[6px]">
                    <Label className="w-full text-gray-700">
                      Finish Date
                      <span className="text-gray-400">(Optional)</span>
                    </Label>
                    <Input placeholder="Offer Name" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Link to={"/Offers/AddOffer3"}>
                <Button className="w-full bg-Brand-600 !text-Base-White font-semibold leading-4 text-Text-md border border-Brand-600">
                  Next
                </Button>
              </Link>
              <Link to={"Offers/AddOffer2"}>
                <Button className="w-full bg-white border border-Gray-300 text-Gray-700 font-semibold leading-6 text-Text-md shadow-none">
                  Back
                </Button>
              </Link>
            </div>
          </div>
          <ProgressBar
            title1="New offer"
            SubTitle1="General informations about offer"
            title2="Eligibility"
            SubTitle2="Schedule and eligiblity details"
            step2={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AddOfferEligibility;
