import { Outlet } from "react-router-dom";

const Main = ({}) => {
  return (
    <main className="col-span-2">
      <Outlet />
    </main>
  );
};

export default Main;
