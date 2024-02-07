const path = (...paths: string[]) => {
  return paths.reduce((prev, current) => `/${prev}/${current}`);
};

const ROOTS_AUTH = "auth";
const ROOTS_DASHBOARD = "dashboard";
const ROOTS_OFFERS = "offers";

export const AUTH_ROUTES_PATH = {
  ROOT: ROOTS_AUTH,
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};
export const AUTH_PATH = {
  SIGN_IN: path(ROOTS_AUTH, "sign-in"),
  SIGN_UP: path(ROOTS_AUTH, "sign-up"),
};

export const DASHBOAR_ROUTES_PATH = {
  ROOT: ROOTS_DASHBOARD,
  OVERVIEW: "overview",
};
export const DASHBOAR_PATH = {
  OVERVIEW: path(ROOTS_DASHBOARD, "overview"),
};

export const OFFERS_ROUTES_PATH = {
  ROOT: ROOTS_OFFERS,
  ADD_OFFER: "add-offer",
};
export const OFFERS_PATH = {
  ALL_OFFERS: ROOTS_OFFERS,
  ADD_OFFER: path(ROOTS_OFFERS, "add-offer"),
};
