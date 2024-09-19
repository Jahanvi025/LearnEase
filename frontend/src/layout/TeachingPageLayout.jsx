import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const TeachingPageLayout = ({ props, children }) => {
  return (
    <>
       <Navbar />
            <>
                {children}
            </>
        <Footer />
    </>
  )
}

export default TeachingPageLayout
