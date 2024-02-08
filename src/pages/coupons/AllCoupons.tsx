import Title from "@/components/custom/Title";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { COUPONS_PATH } from "@/routes/paths";
import { useNavigate } from "react-router-dom";

const AllCoupons = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[2.5rem]  py-12  m-0 col-span-2">
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex w-full">
          <div className="flex flex-grow flex-col  gap-5 items-start  pb-5 w-full">
            <Title
              Title="Coupons"
              SubTitle="All coupons created by you"
              links={[{ Link: "/Coupons", label: "Coupons" }]}
            />
          </div>
          <Button
            className="border border-gray-300  text-gray-700 "
            onClick={() => navigate(COUPONS_PATH.ADD_COUPONS)}
          >
            {" "}
            <img src={"/svg/button/plus.svg"} alt="" className="w-4 h-4" /> Add
            coupons
          </Button>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      DELICIOUS
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <img
                  src={"/svg/input/calendar.svg"}
                  alt=""
                  className="w-3 h-3"
                />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm ">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-500 font-sm text-Text-sm leading-5">
                      DELICIOUS
                    </p>
                    <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" />
                </div>
                <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <img
                  src={"/svg/input/calendar.svg"}
                  alt=""
                  className="w-3 h-3"
                />
                <p className="text-gray-400 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      HUMY
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <img
                  src={"/svg/input/calendar.svg"}
                  alt=""
                  className="w-3 h-3"
                />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      happy
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <img
                  src={"/svg/input/calendar.svg"}
                  alt=""
                  className="w-3 h-3"
                />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-sm">
              <div className="bg-white rounded-tl-lg rounded-tr-lg border border-gray-200 flex flex-col gap-6 p-4">
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-gray-900 font-sm text-Text-sm leading-5">
                      WELCOME
                    </p>
                    <p className="text-gray-600 font-[440] text-Text-xs leading-5">
                      %15 Discount
                    </p>
                  </div>
                  <Switch id="airplane-mode" checked />
                </div>
                <p className="text-gray-700 font-[440] text-Text-xs leading-5">
                  Get 15% off your first purchase using this code.
                </p>
              </div>
              <div className="bg-Gray-25 rounded-bl-lg  items-center rounded-br-lg border border-gray-200 py-[0.625rem] px-4 flex gap-2">
                <img
                  src={"/svg/input/calendar.svg"}
                  alt=""
                  className="w-3 h-3"
                />
                <p className="text-gray-500 font-[440] text-Text-xs leading-5">
                  Ends on Feb 22, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoupons;
