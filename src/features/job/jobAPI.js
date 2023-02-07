import { apiSlice } from "../api/apiSlice";

const jobAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addJob: build.mutation({
            query: (data) => ({
                url: '/job',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Jobs"]
        }),
        getJobs: build.query({
            query: () => "/jobs",
            providesTags: ["Jobs"]
        }),
        getJobByEmployee: build.query({
            query: (email) => `/employee-jobs/${email}`,
            providesTags: ["Jobs"]
        }),
        getJobById: build.query({
            query: (id) => `/job/${id}`,
            providesTags: ["Job"]
        }),
        askQuestion: build.mutation({
            query: (data) => ({
                url: '/query',
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        ansQuestion: build.mutation({
            query: (data) => ({
                url: '/reply',
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Job']
        }),
        apply: build.mutation({
            query: (data) => ({
                url: "/apply",
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["Job"]
        }),
        getAppliedJob: build.query({
            query: (email) => `/applied-jobs/${email}`,
            providesTags: ["Job"]
        }),
        getSpecificAppliedJob: build.query({
            query: ({ email, jobId }) => `/applied-jobs/${email}/job/${jobId}`,
            providesTags: ["Job"]
        }),
        getCandidatesByJob: build.query({
            query: (id) => `/candidates/${id}`
        })
    })
})

export const { useAddJobMutation, useGetJobsQuery, useGetJobByEmployeeQuery, useGetJobByIdQuery, useAskQuestionMutation, useAnsQuestionMutation, useApplyMutation, useGetAppliedJobQuery, useGetSpecificAppliedJobQuery, useGetCandidatesByJobQuery } = jobAPI