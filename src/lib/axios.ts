import axios from "axios";
// config
// import { HOST_API_KEY } from '../config';
// import { errorToast, successToast } from "./toastMessage";

export const baseUrl = "http://54.164.101.155:8010";
// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  // baseURL: "http://34.228.110.113:9010",
  baseURL: baseUrl,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  // timeout: 4000,
});
//alert(navigator.onLine);

axiosInstance.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = localStorage.getItem("i18nextLng");
  config.headers.language = localStorage.getItem("i18nextLng");
  return config;
});
axiosInstance.interceptors.response.use(
  (response: A) => {
    // if (response.status === 200 && response.data.status === 400) {
    //   errorToast(response.data.message);
    // }
    // if (
    //   response.status === 200 &&
    //   (response.data.message === "Success" ||
    //     response.data.message === "تمت العملية بنجاح")
    // ) {
    //   return response.data;
    // }
    // if (
    //   response.status === 200 &&
    //   (response.data.message !== "Success" ||
    //     response.data.message !== "تمت العملية بنجاح")
    // ) {
    //   return response.data;
    // }
    // if (response.status === 200 && response.data.status !== 200) {
    //   successToast(response.data.message);
    //   return response.data;
    // }

    return response;
  },
  (error) => {
    // if (error.response.status === 401) {
    //   //  alert(error.response.statusText);
    // } else if (error.response.status === 402) {
    //   throw error;
    // } else if (
    //   error.response.status === 406 ||
    //   error.response.status === 422 ||
    //   error.response.status === 419
    // ) {
    //   if (
    //     error.response.data.message === "" ||
    //     error?.response?.data?.data?.account_found_nd_profile_not_created
    //   ) {
    //   } else {
    //     errorToast(error.response.statusText);
    //   }
    throw error;
    // } else {
    //   console.log(error.response);
    //   console.log(error.response.data.errors);
    // }
  }
);
export default axiosInstance;
