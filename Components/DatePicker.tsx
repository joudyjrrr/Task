"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, setDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const DatePicker = () => {
  const [Date, SetDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="flex justify-start py-[0.625rem] h-[2.5rem] px-[0.875rem] items-center gap-2 rounded-radius_md border !border-gray-300"
      >
        <Button
          variant={"outline"}
          className={cn(
            "pl-3 text-left font-normal",
            !Date && "text-muted-foreground flex !justify-start w-full"
          )}
        >
          <CalendarIcon className=" h-5 w-5  flex justify-start" />{" "}
          {Date ? (
            <span className="flex justify-start text-gray-600 font-xs text-Text-sm leading-5">
              {format(Date, "y-MM-dd")}
            </span>
          ) : (
            <span className="flex justify-start text-gray-600 font-xs text-Text-sm leading-5">
              2023-12-24
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={Date}
          onSelect={(value: Date | undefined) => SetDate(value)!}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
