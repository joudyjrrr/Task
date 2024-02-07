import { Outlet } from "react-router-dom";

const Main = ({}) => {
  return (
    <main className="px-10">
      <Outlet />
    </main>
  );
};

export default Main;
