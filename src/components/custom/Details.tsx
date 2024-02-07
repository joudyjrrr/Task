import React, { FC, ReactElement, ReactNode } from "react";

const Details: FC<{
  details: { title: string; children: ReactElement<any, any> }[];
}> = ({ details }) => {
  return (
    <div className="flex flex-col">
      {details.map((d) => (
        <div className="flex gap-8 py-8 border-b border-gray-200">
          <p className="text-gray-700 font-md text-Text-sm leading-5 ">
            {d.title}
          </p>
          {d.children}
        </div>
      ))}
    </div>
  );
};

export default Details;
