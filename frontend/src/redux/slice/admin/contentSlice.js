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

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content: [],
        status: null,
        error: null
    },
    reducers: {},
 extraReducers: (builder) =>{
        builder.addCase(fetchContentByID.pending, (state, action) => {
            state.status = 'loading';
        })
            .addCase(fetchContentByID.fulfilled, (state, action) => {
            state.status = 'success';
                const existingContent = state.content.find(c => c._id === action.payload._id);
                if (!existingContent) {
                    state.content = [...state.content, action.payload]; // Append only unique content
                }
        })
            .addCase(fetchContentByID.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
 },
    devTools: true
}

)

export default contentSlice.reducer;