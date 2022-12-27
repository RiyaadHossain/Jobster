import { apiSlice } from "../api/apiSlice";

const authSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        registerCandidate: build.mutation({
            query: (data) => ({
                url: '/jobboxuser',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useRegisterCandidateMutation } = authSlice