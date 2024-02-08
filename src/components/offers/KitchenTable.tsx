import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const KitchenTable = () => {
  const test = ["", "", "", "", ""];
  return (
    <>
      <Table>
        <TableBody>
          <TableHeader className="bg-transparent">
            <TableRow className="bg-Gray-200 border-b border-b-Gray-200 border border-Gray-200  rounded-tl-lg rounded-tr-lg">
              <TableHead className="bg-transparent !w-[18.4375rem]  py-3 px-6 font-normal text-Text-xs leading-[18px] text-Gray-600 ">
                Promotion
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[7.8125rem] font-normal text-Text-xs leading-[18px] text-Gray-600">
                Date added
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[7.875rem] font-normal text-Text-xs leading-[18px] text-Gray-600">
                End date
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[5.25rem] font-normal text-Text-xs leading-[18px] text-Gray-600">
                Status
              </TableHead>
              <TableHead className="bg-transparent py-3 px-6 w-[4.5rem] font-normal text-Text-xs leading-[18px] text-Gray-600"></TableHead>
            </TableRow>
          </TableHeader>
          {test.map((_, idx) => {
            return (
              <TableRow
                className={`${
                  idx + 1 === test.length ? "rounded-bl-lg rounded-br-lg" : ""
                } !border border-Gray-200 border-b-0`}
              >
                <TableCell className="py-4 px-6 flex flex-col  !w-[18.4375rem] justify-center border-b border-b-Gray-200">
                  <p className="text-Gray-900 leading-5 font-medium text-Text-sm flex justify-start items-center w-full">
                    New Client Bonus
                  </p>
                  <p className="leading-5 font-normal text-Text-sm text-Gray-600 w-full">
                    First order? Get a surprise gift instantly
                  </p>
                </TableCell>
                <TableCell className="py-4 px-6 flex items-center justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200">
                  Feb 22, 2022
                </TableCell>
                <TableCell className="py-4 px-6  flex items-center justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200">
                  Feb 23, 2022
                </TableCell>
                <TableCell className="py-4 px-6  flex items-center justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200">
                  <Switch />
                </TableCell>
                <TableCell
                  className={`p-4 flex items-center justify-center text-Text-sm font-normal leading-5 text-Gray-600 border-b border-b-Gray-200 `}
                >
                  <Button className="border-none shadow-none">
                    <img
                      src={"/svg/global/edit.svg"}
                      alt="pen"
                      className="h-5 w-5"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default KitchenTable;
