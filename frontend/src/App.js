import './App.css';
import './tailwind.css';
import React, { useEffect, useState } from 'react';
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
function App() {

  return (
    <>
      <HomeHoc exact component={HomePage} path="/" />
    </>
  );
}

export default App;
