import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  const [ubExcuse, setubExcuse] = useState("");
  const [familyExcuse, setFamilyExcuse] = useState("");
  const [funnyExcuse, setFunnyExcuse] = useState("");

  const handleGetUbExcuse = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/unbelievable/").then((res) =>
      setubExcuse(res.data[0].excuse));

  };
  
  const handleGetFamilyExcuse = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res) =>
      setFamilyExcuse(res.data[0].excuse));

  };
  
  const handleGetFunnyExcuse = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/funny/").then((res) =>
      setFunnyExcuse(res.data[0].excuse));

  };
    

 

  return (
    <div className="App">
      <div className="grid-container"> <h1>Generate Excuse APP</h1> 
       <section className='ub-grid'> <button onClick={handleGetUbExcuse} >Get ubExcuse</button>
        <p>{ ubExcuse}</p>
        </section>
        
        <section className='ub-grid'> <button onClick={handleGetFamilyExcuse} >Get Family Excuse</button>
        <p>{ familyExcuse}</p>
        </section>

        <section className='ub-grid'> <button onClick={handleGetFunnyExcuse} >Get Funny Excuse</button>
        <p>{ funnyExcuse}</p>
        </section>
      </div>
      </div>
  );
}

export default App;
