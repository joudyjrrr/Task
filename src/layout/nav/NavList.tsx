import React from "react";
import { firstNavConfig } from "./config";
import NavItem from "./navItem";

const NavList: React.FunctionComponent<{
  navListData: typeof firstNavConfig;
}> = ({ navListData }) => {
  return (
    <div>
      {navListData.map((navItem) => (
        <NavItem key={navItem.icon} {...navItem} />
      ))}
    </div>
  );
};

export default NavList;
