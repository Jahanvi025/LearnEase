import React from 'react';
import Teaching from '../components/Teaching/Teaching.jsx';
import TeachPage from '../components/Teachpage/TeachPage.jsx';
import UsersInfo from '../components/Teachpage/UsersInfo.jsx';
import HowToBegin from '../components/Teachpage/HowToBegin.jsx';
import BecomeInstructor from '../components/Teachpage/BecomeInstructor.jsx';

const TeachingPage = () => {
  return (
    <>
      <Teaching />
      <TeachPage />
      <UsersInfo />
      <HowToBegin />
      <BecomeInstructor />
    </>
  );
};

export default TeachingPage;
