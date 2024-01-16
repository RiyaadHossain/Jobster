import { baseApi } from "./baseApi";

const COMPANY_API = "/company";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (data) => ({
        url: `${COMPANY_API}/edit-profile`,
        method: "PATCH",
        body: data,
      }),
    }),
    getAllCompanies: builder.query({
      query: (params) => ({
        url: `${COMPANY_API}`,
        method: "GET",
        params,
      }),
    }),
    getCompany: builder.query({
      query: (id) => ({
        url: `${COMPANY_API}/${id}`,
        method: "GET",
      }),
    }),
    myJobs: builder.query({
      query: () => ({
        url: `${COMPANY_API}/my-jobs`,
        method: "GET",
      }),
    }),
    appliedCandidates: builder.query({
      query: () => ({
        url: `${COMPANY_API}/applied-candidates`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useEditProfileMutation,
  useGetAllCompaniesQuery,
  useGetCompanyQuery,
  useMyJobsQuery,
  useAppliedCandidatesQuery,
} = companyApi;
