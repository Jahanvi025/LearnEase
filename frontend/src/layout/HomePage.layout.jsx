import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePageLayout = ({ props, children }) => {
    return (
        <>
            <Navbar />
            <>
                {children}
            </>
        </>
    )
}
export default HomePageLayout
