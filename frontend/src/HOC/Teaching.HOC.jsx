import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeachingPageLayout from '../layout/TeachingPageLayout';

const TeachingHoc = ({ component: Component, path, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          path={path}
          element={
            <TeachingPageLayout>
              <Component />
            </TeachingPageLayout>
          }
        />
        </Routes>
    </>
  );
};

export default TeachingHoc;
