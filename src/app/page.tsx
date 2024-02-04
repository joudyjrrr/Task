import { Button } from "@/components/ui/button";
import SideBar from "../../Layout/SideBar";
import Home1 from "../../Pages/Dashboard/Home/Home1";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <SideBar />
        <Home1 />
      </div>
    </>
  );
}
