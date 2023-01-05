import { apiSlice } from "../api/apiSlice";

const jobSlice = apiSlice.injectEndpoints({
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
    })
})

export const { useAddJobMutation, useGetJobsQuery, useGetJobByIdQuery, useAskQuestionMutation, useAnsQuestionMutation } = jobSlice