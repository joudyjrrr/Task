import React from "react";

const NavItem = ({ title, pathname, icon }) => {
  return (
    <div className="flex gap-2 px-2 py-3 justify-start items-center w-full">
      <img src={icon} alt="avatar" />
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
