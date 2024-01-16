export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") return "";
  window.localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") return "";
  return window.localStorage.getItem(key);
};

export const removeFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") return "";
  return window.localStorage.removeItem(key);
};
