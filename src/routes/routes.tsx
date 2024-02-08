import Layout from "@/layout/Layout";
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import AddCoupon from "@/pages/coupons/AddCoupon";
import AllCoupons from "@/pages/coupons/AllCoupons";
import Overview from "@/pages/dashboard/Overview";
import AllFeedback from "@/pages/feedback/AllFeedback";
import AddOffer from "@/pages/offers/AddOffer";
import AllOffers from "@/pages/offers/AllOffers";
import { Navigate, useRoutes } from "react-router-dom";
import {
  AUTH_ROUTES_PATH,
  COUPONS_ROUTES,
  DASHBOAR_ROUTES,
  FEEDBACK_ROUTES,
  OFFERS_ROUTES,
} from "./paths";
import { AUTH_PAGES } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          element: <Navigate to="auth/sign-in" replace />,
          index: true,
        },
        {
          path: AUTH_ROUTES_PATH.ROOT,
          children: [
            { path: AUTH_ROUTES_PATH.SIGN_IN, element: <SignIn /> },
            { path: AUTH_ROUTES_PATH.SIGN_UP, element: <SignUp /> },
          ],
        },
      ],
    },

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: DASHBOAR_ROUTES.ROOT,
          children: [
            {
              path: DASHBOAR_ROUTES.OVERVIEW,
              element: <Overview />,
            },
          ],
        },

        {
          path: OFFERS_ROUTES.ROOT,
          children: [
            {
              index: true,
              element: <AllOffers />,
            },
            {
              path: OFFERS_ROUTES.ADD_OFFER,
              element: <AddOffer />,
            },
          ],
        },

        {
          path: FEEDBACK_ROUTES.ROOT,
          children: [
            {
              index: true,
              element: <AllFeedback />,
            },
          ],
        },

        {
          path: COUPONS_ROUTES.ROOT,
          children: [
            {
              index: true,
              element: <AllCoupons />,
            },
            {
              path: COUPONS_ROUTES.ADD_COUPON,
              element: <AddCoupon />,
            },
          ],
        },
      ],
    },

    {
      // path: OFFEERS_ROUTES_PATH.ROOT
    },

    // { path: "*" },
  ]);
}
