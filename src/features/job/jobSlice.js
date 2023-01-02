import { apiSlice } from "../api/apiSlice";

const jobSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addJob: build.mutation({
            query: (data) => ({
                url: '/add-job',
                method: 'POST',
                body: data
            })
        }),
        getJobs: build.query({
            query: () => "/jobs"
        }),
        getJobById: build.query({
            query: (id) => `/job/${id}`
        })
    })
})

export const { useAddJobMutation, useGetJobsQuery, useGetJobByIdQuery } = jobSlice