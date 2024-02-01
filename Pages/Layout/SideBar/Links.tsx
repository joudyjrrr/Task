import Image from "next/image";
import Home from "../../../Assets/SVGs/Dashboard/home-line.svg";
import Orders from "../../../Assets/SVGs/Dashboard/SideBar/receipt-check.svg";
import items from "../../../Assets/SVGs/Dashboard/SideBar/layers-three-01.svg";
import Offers from "../../../Assets/SVGs/Dashboard/SideBar/check-done-01.svg";
import Promotions from "../../../Assets/SVGs/Dashboard/SideBar/sale-01.svg";
import Coupons from "../../../Assets/SVGs/Dashboard/SideBar/tag-03.svg";
import Stories from "../../../Assets/SVGs/Dashboard/SideBar/camera-plus(1).svg";
import Vedios from "../../../Assets/SVGs/Dashboard/SideBar/video-recorder.svg";
import Couriers from "../../../Assets/SVGs/Dashboard/SideBar/users-01.svg";
import Feedbacks from "../../../Assets/SVGs/Dashboard/SideBar/notification-text.svg";
import Wallet from "../../../Assets/SVGs/Dashboard/SideBar/wallet-03.svg";

const Links = () => {
  const dashBoardNavLinks : any = [
    {
      title: "Dashborad",
      href: "/",
      icon: <Image alt="" src={Home} className="w-6 h-6" />,
    },
    {
      title: "Orders",
      href: "/orders",
      icon: <Image alt="" src={Orders} className="w-6 h-6" />,
    },
    {
      title: "Items",
      href: "/items",
      icon: <Image alt="" src={items} className="w-6 h-6" />,
    },
    {
      title: "Offers",
      href: "/offers",
      icon: <Image alt="" src={Offers} className="w-6 h-6" />,
    },
    {
      title: "Promotions",
      href: "/promotions",
      icon: <Image alt="" src={Promotions} className="w-6 h-6" />,
    },
    {
      title: "Coupons",
      href: "/coupons",
      icon: <Image alt="" src={Coupons} className="w-6 h-6" />,
    },
    {
      title: "Stories",
      href: "/stories",
      icon: <Image alt="" src={Stories} className="w-6 h-6" />,
    },
    {
      title: "Vedios",
      href: "/vedios",
      icon: <Image alt="" src={Vedios} className="w-6 h-6" />,
    },
    {
      title: "Couriers",
      href: "/curiers",
      icon: <Image alt="" src={Couriers} className="w-6 h-6" />,
    },
    {
      title: "Feedbacks",
      href: "/feedbacks",
      icon: <Image alt="" src={Feedbacks} className="w-6 h-6" />,
    },
    {
      title: "Wallet",
      href: "/wallet",
      icon: <Image alt="" src={Wallet} className="w-6 h-6" />,
    },
  ];
  return {
    dashBoardNavLinks
  }
};
export default Links;
