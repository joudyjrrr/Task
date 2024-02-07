import { Navigate, useRoutes } from "react-router-dom";
import { AUTH_PAGES, DASHBOARD_PAGES } from "./elements";
import { AUTH_ROUTES_PATH, DASHBOAR_ROUTES_PATH } from "./paths";
import Layout from "@/layout/Layout";

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
            { path: AUTH_ROUTES_PATH.SIGN_IN, element: AUTH_PAGES.signIn },
            { path: AUTH_ROUTES_PATH.SIGN_UP, element: AUTH_PAGES.signUp },
          ],
        },
      ],
    },


    {
      path: DASHBOAR_ROUTES_PATH.ROOT,
      element: <Layout />,
      children: [
        {
          path: DASHBOAR_ROUTES_PATH.OVERVIEW,
          element: DASHBOARD_PAGES.overview,
        },
      ],
    },

    {
      // path: OFFEERS_ROUTES_PATH.ROOT
    }

    // { path: "*" },
  ]);
}
