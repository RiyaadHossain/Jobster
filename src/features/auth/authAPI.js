import { apiSlice } from "../api/apiSlice";
import { getUser } from "./authSlice";

const authSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        registration: build.mutation({
            query: (data) => ({
                url: '/user',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(getUser(data.email))
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        getRegisteredUser: build.query({
            query: (email) => ({
                url: `/user/${email}`
            })
        })
    })
})

export const { useRegistrationMutation, useGetRegisteredUserQuery } = authSlice