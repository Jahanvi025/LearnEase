import React from 'react';
import HomePageLayout from '../layout/HomePage.layout'; // Adjust path if needed

const HomeHoc = ({ component: Component }) => {
    return (
        <HomePageLayout>
            <Component />
        </HomePageLayout>
    );
};

export default HomeHoc;
