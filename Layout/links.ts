import dashboard from "../Assets/SVGs/Dashboard/home-line.svg";
import orders from "../Assets/SVGs/Orders.svg";
import items from "../Assets/SVGs/Items.svg";
import offers from "../Assets/SVGs/Offers.svg";
import promotions from "../Assets/SVGs/Promotions.svg";
import coupon from "../Assets/SVGs/Coupon.svg";
import stories from "../Assets/SVGs/Stories.svg";
import videos from "../Assets/SVGs/Videos.svg";
import couriers from "../Assets/SVGs/Couriers.svg";
import feedbacks from "../Assets/SVGs/Feedbacks.svg";
import wallet from "../Assets/SVGs/Wallet.svg";
import support from "../Assets/SVGs/Support.svg";
import setting from "../Assets/SVGs/Setting.svg";
import { link } from "fs";

export const Links1 = () => {
  const links = [
    {
      name: "Dashboard",
      icon: dashboard,
      link: "/",
    },
    {
      name: "Orders",
      icon: orders,
    },
    {
      name: "Items",
      icon: items,
      link: "/items"
    },
    {
      name: "Offers",
      icon: offers,
      link: "/Offers"
    },
    {
      name: "Promotions",
      icon: promotions,
      link: "/promotions"
    },
    {
      name: "Coupons",
      icon: coupon,
      link: "/Coupons"
    },
    {
      name: "Stories",
      icon: stories,
    },
    {
      name: "Videos",
      icon: videos,
    },
    {
      name: "Couriers",
      icon: couriers,
    },
    {
      name: "Feedbacks",
      icon: feedbacks,
      link: "/FeedBack"
    },
    {
      name: "Wallet",
      icon: wallet,
      link: "/Wallet"
    },
  ];

  return links;
};
export const Links2 = () => {
  const links = [
    {
      name: "Support",
      icon: support,
    },
    {
      name: "Setting",
      icon: setting,
    },
  ];
  return links;
};
