import axios from "axios";
import { getNewAccessToken, removeUserInfo } from "@/services/auth.services";
const {
  getFromLocalStorage,
  setToLocalStorage,
} = require("@/utils/localStorage");
const { authToken } = require("@/constants/localStorage");

const axiosInstance = axios.create({});
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.headers["Access-Control-Allow-Credentials"] = "true";
axiosInstance.defaults.timeout = 60000;

// axiosInstance.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axiosInstance.defaults.headers["Access-Control-Allow-Methods"] =
//   "GET,PUT,POST,DELETE,PATCH,OPTIONS";

// Request Intercepter
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authToken);
    if (accessToken) config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response Intercepter
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error?.config;

    if (
      error?.response?.status === 401 &&
      error?.response?.data?.type === "TokenExpired" &&
      !config.sent
    ) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authToken, accessToken);
      return axiosInstance(config);
    }

    const errType = error?.response?.data?.type;
    if (errType === "TokenExpired" && config.sent) {
      removeUserInfo();
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
