import React from 'react';
import {Route, Routes} from "react-router-dom";
import AdminPageLayout from "../layout/AdminPageLayout";

const AdminHoc = ( {component: Component, path, ...rest} ) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    path={path}
                    element={
                        <AdminPageLayout>
                            <Component/>
                        </AdminPageLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default AdminHoc;