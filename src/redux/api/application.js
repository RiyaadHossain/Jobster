import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const APPLICATION_API = "/application";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    apply: builder.mutation({
      query: (data) => ({
        url: `${APPLICATION_API}/apply`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.application],
    }),
    myApplications: builder.query({
      query: (params) => ({
        url: `${APPLICATION_API}/my-applications`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.application],
    }),
    updateStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `${APPLICATION_API}/update-status/${id}`,
        method: "PATCH",
        body: status,
      }),
      invalidatesTags: [tagTypes.application],
    }),
    removeApplication: builder.mutation({
      query: (id) => ({
        url: `${APPLICATION_API}/remove/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.application],
    }),
  }),
});

export const {
  useApplyMutation,
  useMyApplicationsQuery,
  useUpdateStatusMutation,
  useRemoveApplicationMutation,
} = applicationApi;
