function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = "auth";
const ROOTS_DASHBOARD = "dashboard"


export const AUTH_ROUTES_PATH = {
  root: ROOTS_AUTH,
  signIn: "sign-in",
  signUp: "sign-up",
};




export const DASHBOAR_ROUTES_PATH = {
  root: ROOTS_DASHBOARD,
 overview: 'overview'
}