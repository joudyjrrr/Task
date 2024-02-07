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
  SIGN_IN: LazyLoadRoutes("auth/SignIn"),
  SIGN_UP: LazyLoadRoutes("auth/SingUp"),
  //  lazy(() => import("../pages/auth/sign-in/SignIn")),
};

export const DASHBOARD_PAGES = {
  OVERVIEW: LazyLoadRoutes("dashboard/Overview"),
};

export const OFFERS_PAGES = {
  ALL_OFFERS: LazyLoadRoutes("offers/allOffers"),
  ADD_OFFER: LazyLoadRoutes("offers/AddOffer"),
};
