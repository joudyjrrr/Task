import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  title: string;
  icon: JSX.Element;
  pathname?: string;
}

const NavItem: React.FunctionComponent<NavItemProps> = ({
  title,
  pathname,
  icon,
}) => {
  return (
    <div className="flex gap-2 justify-start items-center w-full hover:bg-slate-100 rounded-radius_sm">
      <Link
        to={`${pathname}`}
        className="text-gray-700 text-Text-md leading-6 font-medium w-full flex items-center gap-3 px-3  py-3 "
      >
        {icon}
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
