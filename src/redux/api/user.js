import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query({
      query: () => ({
        url: `${USER_URL}/me`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useMeQuery } = userApi;
