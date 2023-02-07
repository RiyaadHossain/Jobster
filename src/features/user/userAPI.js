import { apiSlice } from "../api/apiSlice";

const userAPI = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => '/users'
        }),
        getUser: build.query({
            query: (email) => `/user/${email}`
        }),
    })
})

export const { useGetUsersQuery, useGetUserQuery } = userAPI