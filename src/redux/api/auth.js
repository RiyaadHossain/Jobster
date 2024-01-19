import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sign-in`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    accessToken: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/access-token`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/change-password`,
        method: "POST",
        body: data,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forget-password`,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignInMutation,
  useAccessTokenMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
