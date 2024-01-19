import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const COMPANY_API = "/company";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editCompanyProfile: builder.mutation({
      query: (data) => ({
        url: `${COMPANY_API}/edit-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.company, tagTypes.user],
    }),
    getAllCompanies: builder.query({
      query: (params) => ({
        url: `${COMPANY_API}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.company],
    }),
    getCompany: builder.query({
      query: (id) => ({
        url: `${COMPANY_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.company],
    }),
    myJobs: builder.query({
      query: () => ({
        url: `${COMPANY_API}/my-jobs`,
        method: "GET",
      }),
      providesTags: [tagTypes.job],
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
  useEditCompanyProfileMutation,
  useGetAllCompaniesQuery,
  useGetCompanyQuery,
  useMyJobsQuery,
  useAppliedCandidatesQuery,
} = companyApi;
