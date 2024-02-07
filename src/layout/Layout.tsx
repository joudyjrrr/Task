import Main from "./Main";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <Main />
    </div>
  );
};

export default Layout;
