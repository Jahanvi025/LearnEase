import './App.css';
import './tailwind.css';
import React from 'react';
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
import SignIn from './pages/Auth/SignIn.jsx'; 

function App() {
  return (
    <>
      <HomeHoc exact component={HomePage} path="/" />
      <HomeHoc exact component={SignIn} path="/signin" />
    </>
  );
}

export default App;
