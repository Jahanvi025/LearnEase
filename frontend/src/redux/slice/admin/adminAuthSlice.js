import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const adminSignIn = createAsyncThunk('admin/signIn', async (userData,thunkAPI) => {
    try{
        const response = await axios.post('http://localhost:5000/auth/login/admin', userData);
        localStorage.setItem('token', response.data.token);
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const adminAuthSlice = createSlice({
    name: 'adminAuth',
    initialState: {
        adminuser: null,
        admintoken: localStorage.getItem('token') || null,
        adminloading: false,
        error: null,
        isAdminAuthenticated: !!localStorage.getItem('token'),
    },
    reducers: {
        logout: (state) => {
            state.adminuser = null;
            state.admintoken = null;
            state.isAdminAuthenticated = false;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminSignIn.pending, (state) => {
            state.adminloading = true;
            state.error = null;
        })
            .addCase(adminSignIn.fulfilled, (state, action) => {
                state.adminloading = false;
                state.adminuser = action.payload.user;
                state.admintoken = action.payload.token;
                state.isAdminAuthenticated = true;
            })
            .addCase(adminSignIn.rejected, (state, action) => {
                state.adminloading = false;
                state.error = action.payload;
            })
    },
    devTools: true
})

export const {logout} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;