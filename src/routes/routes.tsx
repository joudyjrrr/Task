import { Navigate, useRoutes } from "react-router-dom";
import { AUTH_PAGES } from "./elements";
import { AUTH_ROUTES_PATH } from "./paths";

// import EmployeeDashboardLayout from "../layouts/employee/EmployeeDashboardLayout";
// import AuthAdminGuard from "../auth/AuthAdminGuard";
// import AuthEmployeeGuard from "../auth/AuthEmployeeGuard";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      // element: <Navigate to="/auth/sign-in" />,
      children: [
        {
          element: <Navigate to="auth/sign-in" replace />,
          index: true,
        },
        {
          path: AUTH_ROUTES_PATH.root,
          children: [
            { path: AUTH_ROUTES_PATH.signIn, element: AUTH_PAGES.signIn },
            { path: AUTH_ROUTES_PATH.signUp, element: AUTH_PAGES.signUp },
          ],
        },
      ],
    },

    // { path: "*", element: AUTH_PAGES.SignIn },
    // { path: "/404", element: <></> },
  ]);
}
