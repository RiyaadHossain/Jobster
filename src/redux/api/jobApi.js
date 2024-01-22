import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const JOB_URL = "/job";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (params) => ({
        url: `${JOB_URL}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.job],
    }),
    getTypeSpecifiJobs: builder.query({
      query: (params) => ({
        url: `${JOB_URL}/type-specific`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.job],
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.job],
    }),
    postJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.job],
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `${JOB_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.job],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.job],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetTypeSpecifiJobsQuery,
  useGetSingleJobQuery,
  usePostJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
