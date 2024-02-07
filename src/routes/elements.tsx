import { lazy, Suspense } from "react";

export function LazyLoadRoutes(componentPath: string) {
  console.log(componentPath);
  const LazyElement = lazy(() => import(`../pages/${componentPath}`));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
}


export const AUTH_PAGES = {
  signIn: LazyLoadRoutes('auth/SignIn'),
  signUp: LazyLoadRoutes('auth/SingUp'),
  //  lazy(() => import("../pages/auth/sign-in/SignIn")),
};

export const DASHBOARD_PAGES = {
  overview :  LazyLoadRoutes('dashboard/Overview')
}