import React, { Children } from "react";
import { Outlet } from "react-router-dom";

const Main = ({}) => {
  return (
    <main className="">
      <Outlet />
    </main>
  );
};

export default Main;
