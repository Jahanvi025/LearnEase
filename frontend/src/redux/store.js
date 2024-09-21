import {configureStore} from "@reduxjs/toolkit";

import authReducer from  "./slice/authSlice";
import userReducer from "./slice/userSlice";
import adminAuthReducer from "./slice/admin/adminAuthSlice";
import courseReducer from "./slice/admin/coursesSlice"
import contentReducer from "./slice/admin/contentSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        adminAuth: adminAuthReducer,
        courses: courseReducer,
        content: contentReducer
    }
})

export default store;