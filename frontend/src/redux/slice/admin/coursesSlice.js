import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async ( thunkAPI ) => {
    try {
        let response = await axios.get('http://localhost:5000/course/');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const addCourse = createAsyncThunk('courses/addCourse', async (courseData, thunkAPI) => {
    try{
        const token = localStorage.getItem('token');
        let response = await axios.post('http://localhost:5000/course/add', courseData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (id, thunkAPI) => {
    try{
        let response = await axios.get(`http://localhost:5000/course/${id}`);
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const updateCourse = createAsyncThunk('courses/updateCourse', async (id,courseData, thunkAPI) => {
    try{
        let response = await axios.put(`http://localhost:5000/course/${id}`, courseData,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id, thunkAPI) => {
    try{
        let response = await axios.delete(`http://localhost:5000/course/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})


export const fetchCourseBySearch = createAsyncThunk('courses/fetchCourseBySearch', async (query, thunkAPI) => {
    try {
        let response = await axios.get(`http://localhost:5000/course/search?query=${query}`);
        return response.data;

    }catch (err){
        return thunkAPI.rejectWithValue(err.response.data);
    }
})

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        course: null,
        status: 'idle',
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.pending, (state) => {
            state.loading=true;
            state.error=null;
        })
            .addCase(fetchCourses.fulfilled, (state ,action) => {
                state.loading=false;
                state.courses=action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload;
            })
            /*
            For Adding Course to the state
             */

            .addCase(addCourse.pending, (state) => {
                state.loading=true;
                state.error=null;
            })
            .addCase(addCourse.fulfilled, (state, action) => {
                state.loading=false;
                state.courses.push(action.payload.course);
            })
            .addCase(addCourse.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload;
            })
            /**
             * For fetching course by id
             */

            .addCase(fetchCourseById.pending, (state) => {
                state.loading=true;
                state.error=null;
            })
            .addCase(fetchCourseById.fulfilled, (state, action) => {
                state.loading=false;
                state.course=action.payload;
            })
            .addCase(fetchCourseById.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload;
            })

            /**
             * For updating course
             */
            .addCase(updateCourse.pending, (state) => {
                state.loading=true;
                state.error=null;
            })
            .addCase(updateCourse.fulfilled, (state, action) => {
                state.loading=false;
                state.course.put(action.payload.course);
            })
            .addCase(updateCourse.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload;
            })

            /**
             * For deleting course
             */
            .addCase(deleteCourse.pending, (state) => {
                state.loading=true;
                state.error=null;
            })
            .addCase(deleteCourse.fulfilled, (state, action) => {
                state.loading=false;
                state.courses=state.courses.filter(course => course._id !== action.payload.id);
            })
            .addCase(deleteCourse.rejected, (state, action) => {
                state.loading=false;
                state.error=action.payload;
            })
    },
    devTools: true
})

export default coursesSlice.reducer;