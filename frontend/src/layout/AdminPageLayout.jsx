import React, {useEffect} from 'react';
import AdminNavbar from "../components/Navbar/adminNavbar";
import Footer from '../components/Footer/Footer'
import {useNavigate} from "react-router-dom";

//Redux
import {useSelector} from "react-redux";

const AdminPageLayout = ({props,children}) => {
const navigate = useNavigate();
const auth = useSelector((state) => state.adminAuth)
    useEffect(() => {
       if(!auth.isAdminAuthenticated){
           navigate('/learn-hub-admin')
       }
    }, [auth.isAdminAuthenticated, navigate]);


    return (
        <>
         <AdminNavbar/>

            {children}
            <Footer />
        </>
    );
};

export default AdminPageLayout;