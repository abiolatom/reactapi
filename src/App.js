import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
 
  const [advice, setAdvice] = useState("null")

  
  const handleAdvice = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/unbelievable/").then((res) =>
      setAdvice(res.data.excuse));
  }
   
 

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleAdvice} >Get Advice</button>
        <p>{ advice}</p>
      </div>
    </div>
  );
}

export default App;
