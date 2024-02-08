import { Outlet } from "react-router-dom";

const Main = ({}) => {
  return (
    <main className="px-10 bg-gray-50 grow pr-24 overflow-x-hidden">
      <Outlet />
    </main>
  );
};

export default Main;
