import React, { Children } from "react";
import { Outlet } from "react-router-dom";

const Main = ({}) => {
  return (
    <main className="px-[2.5rem] py-12  m-0 col-span-2">
      <Outlet />
    </main>
  );
};

export default Main;
