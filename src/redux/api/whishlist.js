import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const WISHLIST_API = "/wishlist";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myList: builder.query({
      query: (params) => ({
        url: `${WISHLIST_API}/my-list`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.wishlist],
    }),
    add: builder.mutation({
      query: (data) => ({
        url: `${WISHLIST_API}/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),
    alreadyAdded: builder.query({
      query: (id) => ({
        url: `${WISHLIST_API}/already-added/${id}`,
        method: "GET",
      }),
    }),
    remove: builder.mutation({
      query: (id) => ({
        url: `${WISHLIST_API}/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),
  }),
});

export const {
  useMyListQuery,
  useAddMutation,
  useAlreadyAddedQuery,
  useRemoveMutation,
} = wishlistApi;
