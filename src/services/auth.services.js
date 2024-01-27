import { decodeToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";
import { authToken } from "@/constants/localStorage";
import axiosInstance from "../config/axios/axiosInstance";
import { baseUrl } from "@/config/envConfig";

export const storeUserInfo = (accessToken) => {
  if (!accessToken) return "";

  setToLocalStorage(authToken, accessToken);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authToken);
  if (!accessToken) return "";
  const decodedData = decodeToken(accessToken);
  return decodedData;
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(authToken);
};

export const isLoggedIn = () => {
  const userInfo = getUserInfo();
  return !!userInfo;
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${baseUrl}/auth/access-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    sent: true,
  });
};
