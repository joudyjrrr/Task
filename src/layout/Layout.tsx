import Main from "./Main";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};

export default Layout;
