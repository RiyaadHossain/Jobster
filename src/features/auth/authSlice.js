import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const initialState = {
    isLoading: false,
    isError: false,
    email: "",
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userPersistency: (state, { payload }) => {
            state.email = payload
        },
        signOutReducer: (state) => {
            state.email = ""
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
                state.email = action.payload
            }).addCase(signUpThunk.rejected, (state, { error }) => {
                state.isError = true
                state.email = ''
                state.error = error.message
            })

            /* Sign In Thunk */
            .addCase(signInThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = ''
            }).addCase(signInThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.email = action.payload
            }).addCase(signInThunk.rejected, (state, { error }) => {
                state.isError = true
                state.email = ''
                state.error = error.message
            })
    }
})

export const { signOutReducer, userPersistency } = authSlice.actions
export default authSlice.reducer