import './App.css';
import './tailwind.css';
import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Navbar from './components/Navbar';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';
function App() {
  const [data, setData] = useState("");
  const getData = async()=>{
    const response = await Axios.get('http://localhost:5000/getData');
    setData(response.data);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
     
    <div className="App">
     <Navbar/>
     <div>{data}</div>
     <Container />
     <Footer/>
    </div>
  );
}

export default App;
