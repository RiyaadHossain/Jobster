import { baseApi } from "./baseApi";

const APPLICATION_API = "/application";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    apply: builder.mutation({
      query: (data) => ({
        url: `${APPLICATION_API}`,
        method: "POST",
        body: data,
      }),
    }),
    myApplications: builder.query({
      query: () => ({
        url: `${APPLICATION_API}/my-applications`,
        method: "GET",
      }),
    }),
    updateStatus: builder.mutation({
      query: (id, data) => ({
        url: `${APPLICATION_API}/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    removeApplication: builder.mutation({
      query: (id) => ({
        url: `${APPLICATION_API}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useApplyMutation,
  useMyApplicationsQuery,
  useUpdateStatusMutation,
  useRemoveApplicationMutation,
} = applicationApi;
