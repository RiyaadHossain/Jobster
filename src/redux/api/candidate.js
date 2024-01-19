import { tagTypes } from "../tagTypes";
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
      invalidatesTags: [tagTypes.candidate, tagTypes.user],
    }),
    getAllCandidates: builder.query({
      query: (params) => ({
        url: `${CANDIDATE_API}`,
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.candidate],
    }),
    getCandidate: builder.query({
      query: (id) => ({
        url: `${CANDIDATE_API}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.candidate],
    }),
    uploadResume: builder.mutation({
      query: (data) => ({
        url: `${CANDIDATE_API}/upload-resume`,
        method: "POST",
        body: data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.candidate, tagTypes.user],
    }),
    deleteResume: builder.mutation({
      query: () => ({
        url: `${CANDIDATE_API}/delete-resume`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.candidate, tagTypes.user],
    }),
  }),
});

export const {
  useEditProfileMutation,
  useGetAllCandidatesQuery,
  useGetCandidateQuery,
  useUploadResumeMutation,
  useDeleteResumeMutation,
} = candidateApi;
