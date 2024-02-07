import { Navigate, useRoutes } from "react-router-dom";
import { AuthPages } from "./elements";

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
          path: "auth",
          children: [
            { path: "sign-in", element: AuthPages.SignIn },
            { path: "sign-up", element: AuthPages.SignUp },
          ],
        },
        // { path: "auth/login", element: <LoginPage /> },
        // { path: "auth/restaurant-form", element: <RestaurantFormPage /> },
        // { path: "auth/admin-form", element: <RegisterPage /> },
        // { path: "auth/payment-form", element: <PaymentFormPage /> },
        // { path: "auth/reset-password", element: <ResetPasswordPage /> },
        // { path: "auth/confirmation", element: <ConfirmationCodePage /> },
        // {
        //   path: "auth/password-verification",
        //   element: <VerificationCodePage />,
        // },
        // { path: "auth/newPassword-login", element: <NewPasswordLoginPage /> },
      ],
    },

    { path: "*", element: AuthPages.SignIn },
    // { path: "/404", element: <></> },
  ]);
}
