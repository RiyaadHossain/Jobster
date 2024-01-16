import { baseApi } from "./baseApi";

const WISHLIST_API = "/wishlist";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myList: builder.query({
      query: () => ({
        url: `${WISHLIST_API}/my-list`,
        method: "GET",
      }),
    }),
    add: builder.mutation({
      query: () => ({
        url: `${WISHLIST_API}/add`,
        method: "POST",
      }),
    }),
    remove: builder.mutation({
      query: (id) => ({
        url: `${WISHLIST_API}/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useMyListQuery, useAddMutation, useRemoveMutation } =
  wishlistApi;
