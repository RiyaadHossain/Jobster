import { baseApi } from "./baseApi";

const CANDIDATE_API = "/candidate";

export const candidateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (data) => ({
        url: `${CANDIDATE_API}/edit-profile`,
        method: "PATCH",
        body: data,
      }),
    }),
    getAllCandidates: builder.query({
      query: (params) => ({
        url: `${CANDIDATE_API}`,
        method: "GET",
        params,
      }),
    }),
    getCandidate: builder.query({
      query: (id) => ({
        url: `${CANDIDATE_API}/${id}`,
        method: "GET",
      }),
    }),
    uploadResume: builder.mutation({
      query: (data) => ({
        url: `${CANDIDATE_API}/upload-resume`,
        method: "POST",
        body: data,
        contentType: "multipart/form-data",
      }),
    }),
  }),
});

export const {
  useEditProfileMutation,
  useGetAllCandidatesQuery,
  useGetCandidateQuery,
  useUploadResumeMutation,
} = candidateApi;
