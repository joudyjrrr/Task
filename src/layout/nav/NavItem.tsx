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
    <div className="flex gap-2 px-2 py-3 justify-start items-center w-full">
      {icon}
      <Link
        to={`${pathname}`}
        className="text-gray-700 text-Text-md leading-6 font-medium"
      >
        {title}
      </Link>
    </div>
  );
};

export default NavItem;
