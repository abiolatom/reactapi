import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
 
  const [ubExcuse, setubExcuse] = useState("");
  const [familyExcuse, setFamilyExcuse] = useState("");

  const handleGetUbExcuse = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/unbelievable/").then((res) =>
      setubExcuse(res.data[0].excuse));

  };
  
  const handleGetFamilyExcuse = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res) =>
      setFamilyExcuse(res.data[0].excuse));

  };
  
    
  useEffect(() => {
    handleGetUbExcuse();
    handleGetFamilyExcuse();
  }, []); 
 

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleGetUbExcuse} >Get ubExcuse</button>
        <p>{ ubExcuse}</p>
      </div>
      </div>
  );
}

export default App;
