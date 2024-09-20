import React from 'react';
import AdminPageLayout from "../layout/AdminPageLayout";

const AdminHoc = ( {component: Component} ) => {
    return (
        <>
            <AdminPageLayout>
                <Component/>
            </AdminPageLayout>
        </>
    );
};

export default AdminHoc;