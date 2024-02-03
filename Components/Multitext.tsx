
"use client"
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import Close from "../Assets/SVGs/Dashboard/x-close.svg";
const Multitext = () => {
  const [inputText, setInputText] = useState<string>("");
  const [styledText, setStyledText] = useState<string[]>([]);
  const handleKeyPress: any = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      setStyledText((prevText) => [...prevText, inputText]);
      setInputText("");
    }
  };
  const handleRemoveItem = (index: number) => {
    setStyledText((prevText) => {
      const updatedText = [...prevText];
      updatedText.splice(index, 1);
      return updatedText;
    });
  };
  return (
    <div className="w-full flex-col flex p-3 gap-2 rounded-md border border-gray-300  shadow-sm">
      <div className="flex gap-1">
        {styledText &&
          styledText.map((d, index) => (
            <div className="flex p-0.5 pl-[0.5625rem] gap-[0.19rem] justify-center items-center rounded-md border border-gray-300">
              <p>{d}</p>
              <Image
                onClick={() => handleRemoveItem(index)}
                src={Close}
                alt=""
                className="w-3 h-3"
              />
            </div>
          ))}
      </div>
      <Textarea
        className="!border-none shadow-none !outline-none !focus:outline-none"
        value={inputText}
        onChange={(event: any) => setInputText(event.target.value)}
        onKeyPress={handleKeyPress}
        rows={1}
      />
    </div>
  );
};

export default Multitext;
