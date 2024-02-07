function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const ROOTS_AUTH = "auth";

// export const AUTH_PATH = {
//   root: ROOTS_AUTH,
//   signIn: path(ROOTS_AUTH, "/SignIn"),
//   signUp: path(ROOTS_AUTH, "/SignUp"),
//   verify: path(ROOTS_AUTH, "/verify"),
//   resetPassword: path(ROOTS_AUTH, "/reset-password"),
//   newPassword: path(ROOTS_AUTH, "/new-password"),
// };

export const AUTH_ROUTES_PATH = {
  root: ROOTS_AUTH,
  signIn: "sign-in",
  signUp: "sign-up",
};
