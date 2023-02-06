import { apiSlice } from "../api/apiSlice";

const userAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: () => '/users'
        })
    })
})

export const { useGetUserQuery } = userAPI