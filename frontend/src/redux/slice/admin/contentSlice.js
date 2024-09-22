import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContentByID = createAsyncThunk('ccontent/fetchContentByID', async ( {contentId, courseId}, thunkAPI) => {
    try{
        let response = await axios.get(`http://localhost:5000/content/${courseId}/${contentId}`);
        return response.data;

    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const createContent = createAsyncThunk('content/createContent', async ({contentData, courseId, onUploadProgress}, thunkAPI) => {
    try{
        const token = localStorage.getItem('token');
        let response = await axios.post(`http://localhost:5000/content/${courseId}/upload`, contentData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true, // Sends cookies if required for auth
                onUploadProgress,

        });
        return response.data;
    } catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})


const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content: [],
        status: null,
        loading: false,
        error: null,
        uploadProgress: 0
    },
    reducers: {
        resetUploadProgress: (state, action) => {
            state.uploadProgress = 0;
        },
        setUploadProgress: (state, action) => {
            state.uploadProgress = action.payload;
        }
    },
 extraReducers: (builder) =>{
        builder.addCase(fetchContentByID.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
        })
            .addCase(fetchContentByID.fulfilled, (state, action) => {
            state.status = 'success';
            state.loading = false;
                if (action.payload && action.payload._id) {
                    const existingContent = state.content.find(c => c._id === action.payload._id);
                    if (!existingContent) {
                        state.content = [...state.content, action.payload]; // Append only unique content
                    }
                }
        })
            .addCase(fetchContentByID.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
            .addCase(createContent.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
            })
            .addCase(createContent.fulfilled, (state, action) => {
            state.status = 'success';
            state.loading = false;
            state.content = [...state.content, action.payload];
            state.uploadProgress = 100;
            })
            .addCase(createContent.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload;
            })
 },
    devTools: true
}

)
export const {resetUploadProgress, setUploadProgress} = contentSlice.actions;
export default contentSlice.reducer;