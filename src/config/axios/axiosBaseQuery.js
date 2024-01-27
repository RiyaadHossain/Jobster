import axiosInstance from "./axiosInstance";

export const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, params, body, contentType }) => {

    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers: {
          "Content-Type": contentType || "application/json",
        },
        withCredentials: true,
      });
      return result;
    } catch (err) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
