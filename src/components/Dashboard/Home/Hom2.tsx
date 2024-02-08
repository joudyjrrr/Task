import Circle from "../../../Assets/SVGs/Dashboard/Buttons/info-circle.svg";
import ArrowUp from "../../../Assets/SVGs/Dashboard/arrow-up.svg";
import Filter from "../../../Assets/SVGs/Dashboard/filter-funnel-02.svg";
import ChartLine from "./Chart";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Avatar from "../../../Assets/SVGs/SingIn/Avatar.png";
const Hom2 = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      {/* <SideBar /> */}
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-5 items-start border-b border-gray-300 pb-5 w-full">
            <div className="flex ">
              <img src={""} alt="home" className="w-5 h-5" />
              <img src={""} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-600 text-Text-sm font-sm leading-5">
                Dashboard
              </p>
              <img src={""} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-700 text-Text-sm font-md leading-5">
                ...
              </p>
              <img src={""} alt="home" className="w-4 h-4" />
              <p className="px-2 text-gray-700 text-Text-sm font-md leading-5">
                Today’s Report
              </p>
            </div>

            <div>
              <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
                Today’s Balance
              </h1>
              <p className="px-2 text-gray-600 text-Text-md font-xs leading-6">
                see balannce reports of the day and traffic
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5 border border-gray-300 rounded-md w-full shadow-sm">
            <div className=" flex flex-col">
              <h1 className="text-gray-900 text-[1.125rem] font-md leading-[1.75rem]">
                Today’s Balance
              </h1>
              <p className="px-2 text-gray-600 text-Text-sm font-xs leading-5">
                Based on the time you opened your place today
              </p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-gray-900 text-[1.875rem] font-md leading-[1.75rem]">
                10,843.82
              </h1>
              <div className="flex gap-1  items-center  text-center rounded-2xl border border-Success-200 bg-Success-50  pt-[0.125rem] pr-[0.625rem] pb-[0.125rem] pl-[0.5rem]">
                <img src={ArrowUp} alt="Ar" className="w-5 h-5" />
                <p className="text-Success-700 text-Text-sm font-sm leading-5">
                  7.2%
                </p>
              </div>
            </div>
            <ChartLine />
          </div>
          <div className="flex flex-col gap-5  !pt-5 !rounded-xl border border-gray-200 shadow-sm w-full">
            <div className="w-full flex   items-start gap-5 !px-6 !pt-5">
              <p className="text-gray-900 text-lg font-semibold leading-6 flex-grow">
                Today’s Orders
              </p>
              <div className="flex gap-4">
                <Button
                  className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-gray-300 shadow-sm
           text-gray-700 text-Text-sm font-md leading-5  gap-1
           "
                >
                  <img src={Filter} alt="" /> Today
                </Button>
                <Button
                  className="flex justify-center py-[0.625rem] px-[0.875rem] items-center rounded-lg border border-Brand-600 bg-Brand-600 shadow-sm
           !text-white text-Text-sm font-md leading-5 
           "
                >
                  Export
                </Button>
              </div>
            </div>
            <Table className="w-full">
              <TableHeader className="w-full flex justify-center bg-gray-50 border-b border-gray-200">
                <TableRow className="w-full flex justify-center bg-gray-50 border-b border-gray-200">
                  <TableHead className="w-[34rem] flex h-10 py-3 !px-6 items-center gap-3 self-stretc ">
                    <Checkbox className="h-6 w-6 rounded-md" />
                    Order
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch">
                    Order ID
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch  ">
                    Time
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch ">
                    Price
                  </TableHead>
                  <TableHead className="flex h-10 py-3 px-6 items-center gap-3 self-stretch "></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full bg-white">
                <TableRow className="flex justify-center bg-white h-20 border-b border-gray-200 ">
                  <TableCell className="w-[33.5rem] flex  h-20 items-center py-4  gap-3self-stretch gap-3">
                    <Checkbox className="h-6 w-6 rounded-md" />
                    <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                      <img src={Avatar} alt="w-full" />
                    </div>
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      Cheeseburger Combo, 2x Extra Cheese
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      #45976830
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6   self-stretch ">
                    <p className="text-gray-600 text-sm leading-5 font-sm ">
                      23:42
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6 ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      $14.81
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <img src={Circle} alt="" />
                  </TableCell>
                </TableRow>
                <TableRow className="flex justify-center bg-white h-20 border-b border-gray-200 ">
                  <TableCell className="w-[33.5rem] flex  h-20 items-center py-4  gap-3self-stretch gap-3">
                    <Checkbox className="h-6 w-6 rounded-md" />
                    <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                      <img src={Avatar} alt="w-full" />
                    </div>
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      Cheeseburger Combo, 2x Extra Cheese
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      #45976830
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6   self-stretch ">
                    <p className="text-gray-600 text-sm leading-5 font-sm ">
                      23:42
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6 ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      $14.81
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <img src={Circle} alt="" />
                  </TableCell>
                </TableRow>
                <TableRow className="flex justify-center bg-white h-20 border-b border-gray-200 ">
                  <TableCell className="w-[33.5rem] flex  h-20 items-center py-4  gap-3self-stretch gap-3">
                    <Checkbox className="h-6 w-6 rounded-md" />
                    <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                      <img src={Avatar} alt="w-full" />
                    </div>
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      Cheeseburger Combo, 2x Extra Cheese
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      #45976830
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6   self-stretch ">
                    <p className="text-gray-600 text-sm leading-5 font-sm ">
                      23:42
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6 ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      $14.81
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <img src={Circle} alt="" />
                  </TableCell>
                </TableRow>
                <TableRow className="flex justify-center bg-white h-20 border-b border-gray-200 ">
                  <TableCell className="w-[33.5rem] flex  h-20 items-center py-4  gap-3self-stretch gap-3">
                    <Checkbox className="h-6 w-6 rounded-md" />
                    <div className="w-10 h-10 rounded-full flex justify-center border border-gray-300">
                      <img src={Avatar} alt="w-full" />
                    </div>
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      Cheeseburger Combo, 2x Extra Cheese
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      #45976830
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6   self-stretch ">
                    <p className="text-gray-600 text-sm leading-5 font-sm ">
                      23:42
                    </p>
                  </TableCell>
                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6 ">
                    <p className="text-gray-900 text-sm leading-5 font-sm ">
                      $14.81
                    </p>
                  </TableCell>

                  <TableCell className="flex items-center  h-20 gap-3 py-4 px-6  self-stretch ">
                    <img src={Circle} alt="" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hom2;
