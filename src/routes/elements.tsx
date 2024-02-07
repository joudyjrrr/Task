import { lazy, Suspense } from "react";
import { AUTH_PATH } from "./paths";

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
  signIn: LazyLoadRoutes(AUTH_PATH.signIn),
  signUp: LazyLoadRoutes(AUTH_PATH.signUp),
  //  lazy(() => import("../pages/auth/sign-in/SignIn")),
};
