import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut: (state) => {
            state.email = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state) => {
            state.isLoading = true
            state.isError = false
        }).addCase(signUpThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.email = action.payload
        }).addCase(signUpThunk.rejected, (state, {error}) => {
            state.isError = true
            state.email = ''
            state.error = error.message
        })
    }
})

export const { signOut } = authSlice.actions
export default authSlice.reducer