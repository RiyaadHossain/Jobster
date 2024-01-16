import { baseApi } from "./baseApi";

const DASHBOARD_API = "/dashboard";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    overview: builder.query({
      query: () => ({
        url: `${DASHBOARD_API}/overview`,
        method: "GET",
      }),
    }),
    profileViewStat: builder.query({
      query: (params) => ({
        url: `${DASHBOARD_API}/stat/profile-view`,
        method: "GET",
        params,
      }),
    }),
    applicationStat: builder.query({
      query: (params) => ({
        url: `${DASHBOARD_API}/stat/application`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useOverviewQuery,
  useProfileViewStatQuery,
  useApplicationStatQuery,
} = dashboardApi;
