import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query({
      query: () => ({
        url: `${USER_URL}/me`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/sign-up`,
        method: "POST",
        body: data,
      }),
    }),
    confirmAccount: builder.query({
      query: ({ name, token }) => ({
        url: `${USER_URL}/confirm-account/${name}/${token}`,
        method: "GET",
      }),
    }),
    uploadImage: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/upload-image`,
        method: "POST",
        body: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getImageUrl: builder.query({
      query: (params) => ({
        url: `${USER_URL}/get-image`,
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useMeQuery,
  useSignUpMutation,
  useConfirmAccountQuery,
  useUploadImageMutation,
  useGetImageUrlQuery,
} = userApi;
