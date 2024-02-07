import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface Header {
  text: string;
  className?: string;
}
interface Row {
  Cell: React.ReactNode;
  className?: string;
}

const CustomTable: React.FC<{
  headers: Header[];
  rows: Row[];
  TableClassName?: string;
  TableRowClassName?: string;
  TableBodyClassName?: string;
}> = ({
  headers,
  rows,
  TableClassName,
  TableRowClassName,
  TableBodyClassName,
}) => {
  return (
    <>
      <Table>
        <TableHeader className={`${ ''}`}>
          <TableRow className={`${TableRowClassName}`}>
            {headers.map((header , index) => {
              return (
                <TableCell key={index} className={`h-fit ${header.className} `}>
                  {header.text}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody className={`${TableBody}`}>
          <TableRow className={`${TableBodyClassName}`}>
            {rows.map((row , index) => {
              return (
                <TableCell  key={index} className={`${row.className}`}>{row.Cell}</TableCell>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CustomTable;
