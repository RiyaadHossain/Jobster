import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://elite-recruiting-server.vercel.app/" }),
    tagTypes: ["Jobs", "Job"],
    endpoints: (build) => ({})
})

