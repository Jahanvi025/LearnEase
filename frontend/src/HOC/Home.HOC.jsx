import React, { Children } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from '../layout/HomePage.layout'
const HomeHoc = ({component: Component,path,...rest}) => {
  return (
    <>
      <Routes>
        <Route {...rest}
          path={path}
          element={
            <HomePageLayout>
              <Component/>
            </HomePageLayout>
          }
          />
      </Routes>
    </>      
  
  )
}

export default HomeHoc
