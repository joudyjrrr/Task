import { FC } from "react";
import Del from "../Assets/SVGs/Dashboard/Delete.svg";
import Edit from "../Assets/SVGs/Dashboard/Icon.svg";
import Stop from "../Assets/SVGs/Dashboard/Stop.svg";
import Add from "../Assets/SVGs/Dashboard/package-plus.svg";
import { useNavigate } from "react-router-dom";

const DropDwon: FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg  absolute z-10 bg-white right-7 top-6">
      <div
        className="flex gap-3 border-b border-gray-200 p-4 cursor-pointer"
        onClick={() => navigate(to)}
      >
        <img src={Edit} alt="" className="w-5 h-5" />
        <p className="text-gray-800 text-Text-md font-sm left-6">
          Edit Category
        </p>
      </div>
      <div className="flex gap-3 border-b border-gray-200 p-4 cursor-pointer">
        <img src={Add} alt="" className="w-5 h-5" />
        <p className="text-gray-800 text-Text-md font-sm left-6">
          Add New Item
        </p>
      </div>
      <div className="flex gap-3 border-b border-gray-200 p-4 cursor-pointer">
        <img src={Stop} alt="" className="w-5 h-5" />
        <p className="text-gray-800 text-Text-md font-sm left-6">
          Stop New Orders
        </p>
      </div>
      <div className="flex gap-3 border-b border-gray-200 p-4 cursor-pointer">
        <img src={Del} alt="" className="w-5 h-5" />
        <p className="text-Error-600 text-Text-md font-sm left-6">
          Delete Category
        </p>
      </div>
    </div>
  );
};

export default DropDwon;
