import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageLayout from '../layout/HomePage.layout';
// import SignIn from '../pages/Auth/SignIn'; // Adjust the path as needed

const HomeHoc = ({ component: Component, path, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          path={path}
          element={
            <HomePageLayout>
              <Component />
            </HomePageLayout>
          }
        />
        </Routes>
    </>
  );
};

export default HomeHoc;
