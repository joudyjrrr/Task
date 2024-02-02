import { Button } from "@/components/ui/button";
import SideBar from "../../Layout/SideBar";
import Image from "next/image";
import Img from "../../Assets/SVGs/Dashboard/img1.jpg";
import RwoRight from "../../Assets/SVGs/Dashboard/chevron-right.svg";
import home from "../../Assets/SVGs/Dashboard/home-line.svg";
import dot from "../../Assets/SVGs/Dashboard/dots-vertical.svg";
import ArrowUp from "../../Assets/SVGs/Dashboard/arrow-up.svg";
import { Input } from "@/components/ui/input";
import Ell from "../../Assets/SVGs/Dashboard/Ellipse 1075(1).svg";
import EllGray from "../../Assets/SVGs/Dashboard/Ellipse 1075(2).svg";
import Items from "../../Assets/SVGs/Dashboard/items.png";
import Star1 from "../../Assets/SVGs/Dashboard/goldStar.svg";
import Star2 from "../../Assets/SVGs/Dashboard/halfGoldStar.svg";
import Star3 from "../../Assets/SVGs/Dashboard/Star background(1).svg";
import Chexk from "../../Assets/SVGs/SingIn/check-circle.svg";
import Home1 from "../../Pages/Home/Home1";

export default function Home() {
  return (
    <>
      <div className="grid gap-0 grid-cols-[auto,1fr,1fr] ">
        <SideBar />
        <Home1 />
      </div>
    </>
  );
}
