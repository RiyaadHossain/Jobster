import Cookies from "js-cookie";

export const setToCookie = (key, token) => {
  if (!key) return "";
  Cookies.set(key, token);
};

export const getFromCookie = (key) => {
  if (!key) return "";
  Cookies.get(key);
};

export const removeFromCookie = (key) => {
  if (!key) return "";
  Cookies.remove(key);
};
