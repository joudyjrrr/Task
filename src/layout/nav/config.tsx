
const Icon = (path: string) => <img src={path} alt="nav Icon" />;

const ICONS = {
  dashboard: Icon("/svg/global/home-line.svg"),
  orders: Icon("/svg/nav/receipt-check.svg"),
  items: Icon("/svg/nav/layers-three.svg"),
  offers: Icon("/svg/nav/check-done.svg"),
  promotions: Icon("/svg/nav/sale.svg"),
  coupons: Icon("/svg/nav/tag.svg"),
  stories: Icon("/svg/nav/camera-plus.svg"),
  videos: Icon("/svg/nav/video-recorder.svg"),
  couriers: Icon("/svg/nav/users.svg"),
  feedbacks: Icon("/svg/nav/notification-text.svg"),
  wallet: Icon("/svg/global/wallet.svg"),
  support: Icon("/svg/nav/life-buoy.svg"),
  setting: Icon("/svg/nav/settings.svg"),
};

export const firstNavConfig = [
  {
    title: "dashboard",
    icon: ICONS.dashboard,
    pathname: "/dashboard/overview",
  },
  {
    title: "orders",
    icon: ICONS.orders,
    pathname: "/orders",
  },
  {
    title: "items",
    icon: ICONS.items,
    pathname: "/items",
  },
  {
    title: "offers",
    icon: ICONS.offers,
    pathname: "/offers",
  },
  {
    title: "promotions",
    icon: ICONS.promotions,
    pathname: "/promotions",
  },
  {
    title: "coupons",
    icon: ICONS.coupons,
    pathname: "/coupons",
  },
  {
    title: "stories",
    icon: ICONS.stories,
  },
  {
    title: "videos",
    icon: ICONS.videos,
  },
  {
    title: "couriers",
    icon: ICONS.couriers,
  },
  {
    title: "feedbacks",
    icon: ICONS.feedbacks,
    pathname: "/feedbacks",
  },
  {
    title: "wallet",
    icon: ICONS.wallet,
  },
];
export const secondNavConfig = [
  {
    title: "Support",
    icon: ICONS.support,
  },
  {
    title: "Setting",
    icon: ICONS.setting,
  },
];
