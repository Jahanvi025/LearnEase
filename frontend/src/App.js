import './App.css';
import './tailwind.css';
import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Container from './components/Container.jsx';
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
     <h1 className='text-blue-600'>Hello World!</h1>
     <div>{data}</div>
     <Container />
    </div>
  );
}

export default App;
