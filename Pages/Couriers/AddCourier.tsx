"use client";
import React from "react";
import Title from "../../Components/Title";
import SideBar from "../../Layout/SideBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PhoneNumberInput from "../../Components/PhoneNumberInput";
import EmailInput from "../../Components/EmailInput";
import DragDrop from "../../Components/DragDrop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomSelect from "../../Components/CustomSelect";
import MulriSelect from "../../Components/MultiSelect/MultiSelect";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
const AddCourier = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start w-full">
            <Title
              Title="Add Courier"
              SubTitle="Add a new courier for your kitchen."
              links={[
                { Link: "/Couriers", label: "Couriers" },
                { Link: "/Add-courier", label: "Add Courier" },
              ]}
            />
            <div className="flex flex-col gap-[2.5rem]  w-[43.5rem]">
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Courier Name</Label>
                <Input placeholder="Courier’s name" />
              </div>

              <PhoneNumberInput
                placeholder="+1 (555) 000-0000"
                label="Phone Number"
              />
              <EmailInput
                label="Email"
                placeholder="olivia@untitledui.com"
                className="w-full"
              />
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Picture</Label>
                <DragDrop />
              </div>

              <div className="flex justify-center items-center">
                <div className="h-[1px] flex-grow bg-gray-200"></div>
                <p className="text-gray-600 font-sm text-Text-sm leading-5 px-2">
                  Delivery Preferences
                </p>
                <div className="h-[1px] flex-grow bg-gray-200"></div>
              </div>
              <div className="w-full flex flex-col gap-[0.38rem]">
                <Label>Distance of Delivery</Label>
                <Tabs defaultValue="Specific-Destinations" className="w-full">
                  <TabsList className=" px-0 rounded-md w-full ">
                    <TabsTrigger
                      value="Specific-Destinations"
                      className="py-2 flex px-4 basis-[50%] justify-center !border !border-gray-300  !rounded-tl-md   !rounded-bl-md   font-md text-sm data-[state=active]:bg-gray-50  data-[state=active]:!text-gray-800"
                    >
                      Specific Destinations
                    </TabsTrigger>
                    <TabsTrigger
                      value="Distance-Limit"
                      className="py-2 flex  px-4 basis-[50%] justify-center   !border !border-gray-300  !rounded-tr-md   !rounded-br-md    font-md  text-sm data-[state=active]:bg-gray-50  data-[state=active]:!text-gray-800"
                    >
                      Distance Limit
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="Specific-Destinations"
                    className="flex flex-col gap-8 items-start w-full"
                  >
                    <div className="w-full flex flex-col gap-[0.38rem]">
                      <Label>Destinations</Label>
                      <MulriSelect />
                    </div>
                  </TabsContent>
                  <TabsContent value="Distance-Limit" className="pt-8">
                    <Slider defaultValue={[0, 75]} />
                    <div className="flex mt-4 ">
                      <p className="text-gray-900 text-sm font-sm basis-[72%]">
                        1km
                      </p>
                      <p className="text-gray-900 text-sm font-sm">15km</p>
                    </div>
                  </TabsContent>
                </Tabs>

              
              </div>
              <div className="flex flex-col gap-3">
                  <Button Color={`Orang`} className="bg-Brand-600 text-white">
                  Add Courier
                  </Button>
                  <Button className="border border-gray-300">Cancel</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourier;
