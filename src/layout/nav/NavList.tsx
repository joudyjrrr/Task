import React from "react";
import { firstNavConfig } from "./config";
import NavItem from "./NavItem";

const NavList: React.FunctionComponent<{
  navListData: typeof firstNavConfig;
}> = ({ navListData }) => {
  return (
    <div>
      {navListData.map((navItem) => (
        <NavItem key={navItem.pathname} {...navItem} />
      ))}
    </div>
  );
};

export default NavList;
