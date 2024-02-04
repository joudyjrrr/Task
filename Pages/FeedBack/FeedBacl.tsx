
"use client"
import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import Image from "next/image";
import Feture1 from "../../Assets/SVGs/Dashboard/Featured icon(1).svg";
import Feture2 from "../../Assets/SVGs/Dashboard/Featured icon(2).svg";
import Feture3 from "../../Assets/SVGs/Dashboard/Featured icon(3).svg";
import ArrowUp from "../../Assets/SVGs/Dashboard/arrow-up.svg";
import goldStar from "../../Assets/SVGs/Dashboard/goldStar.svg";
import grayStar from "../../Assets/SVGs/Dashboard/Star background(1).svg";
import halfGoldStar from "../../Assets/SVGs/Dashboard/halfGoldStar.svg";
import ArrowUpRed from "../../Assets/SVGs/Dashboard/ArrwoUpRed.svg";
import SearchInput from "../../Components/SearchInput";
import { Label } from "@/components/ui/label";
import CustomSelect from "../../Components/CustomSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagenation from "../../Components/Pagenation";
import { useRouter } from "next/navigation";

const FeedBack = () => {
  const router = useRouter()
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <Title
              Title="Feedbacks"
              SubTitle="See customer reviews about the kitchen"
              links={[{ Link: "/Feedbacks", label: "Feedbacks" }]}
            />
          </div>

          <div className="flex gap-4 w-full">
            <div className="flex  flex-grow items-start justify-start gap-1.5 flex-col rounded-md border border-gray-200 shadow-sm p-6">
              <Image src={Feture1} alt="" className="w-8 h-8" />
              <p className="text-gray-400 font-sm text-Text-sm leading-5">
                Kitchen’s Rating
              </p>
              <p className="text-gray-900 font-[440] text-[1.75rem] leading-5">
                4.5
              </p>
            </div>
            <div className="flex  flex-grow items-start justify-start gap-1.5 flex-col rounded-md border border-gray-200 shadow-sm p-6">
              <Image src={Feture2} alt="" className="w-8 h-8" />
              <p className="text-gray-400 font-sm text-Text-sm leading-5">
                Positive Feedbacks
              </p>
              <div className="flex w-full justify-between">
                <p className="text-gray-900 font-[440] text-[1.75rem] leading-5">
                  145
                </p>
                <div className="flex gap-1  items-center  text-center rounded-2xl border border-Success-200 bg-Success-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                  <Image src={ArrowUp} alt="Ar" className="w-5 h-5" />
                  <p className="text-Success-700 text-Text-sm font-sm leading-5">
                    56%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-grow items-start justify-start gap-1.5 flex-col rounded-md border border-gray-200 shadow-sm p-6">
              <Image src={Feture3} alt="" className="w-8 h-8" />
              <p className="text-gray-400 font-sm text-Text-sm leading-5">
                Negative Feedbacks
              </p>
              <div className="w-full flex justify-between">
                <p className="text-gray-900 font-[440] text-[1.75rem] leading-5">
                  8
                </p>
                <div className="flex gap-1  items-center  text-center rounded-2xl border border-Error-200 bg-Error-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                  <Image src={ArrowUpRed} alt="Ar" className="w-5 h-5" />
                  <p className="text-Error-700 text-Text-sm font-sm leading-5">
                    56%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-xl  border border-gray-200 shadow-sm w-full">
            <div className="w-full justify-start flex rounded-md  items-start gap-5 p-5">
              <div className="flex flex-col gap-[0.3rem]">
                <Label>Search for feedback</Label>
                <SearchInput />
              </div>
              <div className="flex flex-col gap-[0.3rem] w-[12rem]">
                <Label>Status</Label>
                <CustomSelect
                  TriggerClassName="w-full flex-grow"
                  children={
                    <div className="flex gap-2 items-center w-full">
                      <p className="w-2 h-2 bg-Success-500 rounded-full"></p>
                      <p className="text-gray-900 font-md text-Text-sm leading-5">
                        Positive
                      </p>
                    </div>
                  }
                  values={["one", "two"]}
                />
              </div>
            </div>

            <Table className="">
              <TableHeader className="pr-12">
                <TableRow className="w-full flex justify-between  bg-gray-50 border-b border-gray-200">
                  <TableHead className="">
                    <p className="text-gray-600   text-Text-xs font-sm leading-5">
                      Order
                    </p>
                  </TableHead>
                  <TableHead className="">
                    <p className="text-gray-600   text-Text-xs font-sm leading-5">
                      Rating
                    </p>
                  </TableHead>
                  <TableHead className="basis-[65%] p-4">
                    <p className="text-gray-600   text-Text-xs font-sm leading-5">
                      Feedback
                    </p>
                  </TableHead>
                  <TableHead className="p-4">
                    <p className="text-gray-600   text-Text-xs font-sm leading-5">
                      Date
                    </p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className=" items-center p-4 cursor-pointer" >
                    <p className="text-gray-900 text-sm leading-5 font-sm" onClick={()=>router.push('FeedBack/Feedbacks-details')}>
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      BBQ Bliss Burger, Sweet Potato Fries M
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      Cheese Lover's Delight is a cheese paradise and de...
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      Kerala Chicken Roast
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      The classic burger is a flavor explosion! The patty is..
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      Pretzel Chicken Noodle Soup - Regular{" "}
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      The classic burger is a flavor explosion! The patty is..{" "}
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      Spicy BBQ Jackfruit Tacos - M
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      Cheese Lover's Delight is a cheese paradise and de...{" "}
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      Double Chicken & Cheese Fiesta - Pizza - L{" "}
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      Cheese Lover's Delight is a cheese paradise and de...
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={halfGoldStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      NY Chicken Roll - L
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      The classic burger is a flavor explosion! The patty is..
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      #863490
                    </p>
                  </TableCell>
                  <TableCell className="flex gap-0 items-center p-4">
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={goldStar} alt="" className="w-6 h-6" />
                    <Image src={grayStar} alt="" className="w-6 h-6" />
                  </TableCell>
                  <TableCell className="flex flex-col gap-2 basis-[70%] p-4">
                    <p className="text-gray-900 text-sm leading-5 font-sm">
                      Pasta Alla Gricia{" "}
                    </p>
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      Cheese Lover's Delight is a cheese paradise and de...{" "}
                    </p>
                  </TableCell>
                  <TableCell className=" items-center p-4">
                    <p className="text-gray-600 text-Text-sm leading-5 font-xs">
                      18/09/2016
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
              <Pagenation />
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
