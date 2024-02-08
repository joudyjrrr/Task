const path = (...paths: string[]) => {
  return paths.reduce((prev, current) => `/${prev}/${current}`);
};

export const AUTH_ROUTES_PATH = {
  ROOT: "auth",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};
export const AUTH_PATH = {
  SIGN_IN: path(AUTH_ROUTES_PATH.ROOT, "sign-in"),
  SIGN_UP: path(AUTH_ROUTES_PATH.ROOT, "sign-up"),
};

export const DASHBOAR_ROUTES = {
  ROOT: "dashboard",
  OVERVIEW: "overview",
};
export const DASHBOAR_PATH = {
  OVERVIEW: path(DASHBOAR_ROUTES.ROOT, "overview"),
};

export const OFFERS_ROUTES = {
  ROOT: "offers",
  ADD_OFFER: "add-offer",
};
export const OFFERS_PATH = {
  ALL_OFFERS: OFFERS_ROUTES.ROOT,
  ADD_OFFER: path(OFFERS_ROUTES.ROOT, "add-offer"),
};

export const FEEDBACK_ROUTES = {
  ROOT: "feedbacks",
};
export const FEEDBACK_PATH = {
  ALL_FEEDBACK: FEEDBACK_ROUTES.ROOT,
};

export const COUPONS_ROUTES = {
  ROOT: "coupons",
  ADD_COUPON: 'add-coupon'
};
export const COUPONS_PATH = {
  ALL_COUPONS: COUPONS_ROUTES.ROOT,
  ADD_COUPONS: path(COUPONS_ROUTES.ROOT, "add-coupon"),
};
