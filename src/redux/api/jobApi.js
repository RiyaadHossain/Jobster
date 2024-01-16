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
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "GET",
      }),
    }),
    postJob: builder.mutation({
      query: (data) => ({
        url: `${JOB_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `${JOB_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetSingleJobQuery,
  usePostJobMutation,
  useUpdateJobMutation,
  useDeleteJobMutation,
} = jobApi;
