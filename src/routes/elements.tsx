import { lazy, Suspense } from "react";

export function LazyLoadRoutes(componentPath: string) {
  const LazyElement = lazy(() => import(componentPath));

  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  );
}

export const AUTH_PAGES = {
  SIGN_IN: LazyLoadRoutes("../pages/auth/SignIn.tsx"),
  SIGN_UP: LazyLoadRoutes("../pages/auth/SignUp.tsx"),
};

export const DASHBOARD_PAGES = {
  OVERVIEW: LazyLoadRoutes("../pages/dashboard/Overview.tsx"),
};

export const OFFERS_PAGES = {
  ALL_OFFERS: LazyLoadRoutes("../pages/offers/allOffers.tsx"),
  ADD_OFFER: LazyLoadRoutes("../pages/offers/AddOffer.tsx"),
};

export const ORDERS_PAGES = {
  ALL_OFFERS: LazyLoadRoutes("../pages/offers/allOffers.tsx"),
  ADD_OFFER: LazyLoadRoutes("../pages/offers/AddOffer.tsx"),
};

export const FEEDBACK_PAGES = {
  ALL_FEEDBACK: LazyLoadRoutes("../pages/feedback/AllFeedback.tsx"),
};

export const COUPONS_PAGES = {
  ALL_COUPONS: LazyLoadRoutes("../pages/coupons/AllCoupons.tsx"),
  ADD_COUPON: LazyLoadRoutes("../pages/coupons/AddCoupon.tsx"),
};
