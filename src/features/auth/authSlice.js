import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: { email: "", role: "" },
    error: ""
}

export const signUpThunk = createAsyncThunk("auth/signUp", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const signInThunk = createAsyncThunk("auth/signIn", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
    const res = await fetch(`https://elite-recruiting-server.vercel.app/user/${email}`)
    const data = await res.json()
    if (data.status) return data
    return email
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userPersistency: (state, { payload }) => {
            state.user.email = payload
        },
        signOutReducer: (state) => {
            state.user.email = ""
        },
        toggleLoading: (state) => {
            state.isLoading = false
        },
        toggleFalse: (state) => {
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder

            /* Sign Up Thunk */
            .addCase(signUpThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            }).addCase(signUpThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.user.email = action.payload
            }).addCase(signUpThunk.rejected, (state, { error }) => {
                state.user.email = ''
                state.isError = true
                state.isLoading = false
                state.error = error.message
            })

            /* Sign In Thunk */
            .addCase(signInThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.error = ''
            }).addCase(signInThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user.email = action.payload
            }).addCase(signInThunk.rejected, (state, { error }) => {
                state.user.email = ''
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.error = error.message
            })

            /* Get User */
            .addCase(getUser.pending, (state) => {
                state.isError = false
                state.error = ''
            }).addCase(getUser.fulfilled, (state, { payload }) => {
                state.isLoading = false
                if (payload.status) {
                    state.user = payload.data
                } else {
                    state.user.email = payload
                }
            }).addCase(getUser.rejected, (state, { error }) => {
                state.user.email = ''
                state.isError = true
                state.isLoading = false
                state.error = error.message
            })
    }
})

export const { signOutReducer, userPersistency, toggleLoading, toggleFalse } = authSlice.actions
export default authSlice.reducer