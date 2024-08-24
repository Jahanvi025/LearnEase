import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';

export const signIn = createAsyncThunk('auth/signIn', async ( userData, thunkAPI ) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/login', userData);
        Cookies.set('token', response.data.token);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const signUp = createAsyncThunk('auth/register', async ( userData, thunkApi ) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/register', userData);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data)
    }
})

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ( {email,otp}, thunkApi ) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/register/verify', {email, otp});
        Cookies.set('token', response.data.token);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: Cookies.get('token') || null,
        loading: false,
        error: null,
        isAuthenticated: !!Cookies.get('token')
    },
    reducers: {
        logout: ( state ) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase(signIn.pending, ( state ) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(signIn.fulfilled, ( state, action ) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(signIn.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signUp.pending, ( state ) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, ( state, action ) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(signUp.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(verifyOtp.pending, ( state ) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, ( state, action ) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(verifyOtp.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
    devTools: true
})
export const {logout} = authSlice.actions;
export default authSlice.reducer;