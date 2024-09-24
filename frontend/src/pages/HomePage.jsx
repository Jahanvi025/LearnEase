import React from 'react'
import Container from '../components/Container'
import WhoWeAre from "../components/WhoWeAre/WhoWeAre.jsx"
import CourseCategory from "../components/CourseCategory";
import WhySelect from '../components/WhySelect/WhySelect.jsx';

const HomePage = () => {
  return (
    <>
      <Container/>
      <CourseCategory/>
      <WhoWeAre/>
      <WhySelect/>
    </>
  )
}

export default HomePage
