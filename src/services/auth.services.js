import { decodeToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorage";
import { authToken } from "@/constants/localStorage";
import axiosInstance from "../config/axios/axiosInstance";
import { baseUrl } from "@/config/envConfig";
import { refreshTokenKey } from "@/constants/cookie";
import { getFromCookie, removeFromCookie, setToCookie } from "@/utils/cookie";

export const storeUserInfo = (accessToken, refreshToken) => {
  if (!refreshToken || !accessToken) return "";

  setToLocalStorage(authToken, accessToken);
  setRefreshToken(refreshToken);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authToken);
  if (!accessToken) return "";
  const decodedData = decodeToken(accessToken);
  return decodedData;
};

export const removeUserInfo = () => {
  removeRefreshToken(refreshTokenKey);
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

export const setRefreshToken = (token) => {
  setToCookie(refreshTokenKey, token);
};

export const getRefreshToken = () => {
  return getFromCookie(refreshTokenKey);
};

export const removeRefreshToken = () => {
  removeFromCookie(refreshTokenKey);
};
