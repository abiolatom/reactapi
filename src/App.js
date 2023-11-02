import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const adviceCat = ["family", "office", "party"];
  const [selectedAdviceCat, setSelectedAdviceCat] = useState(adviceCat[0]);

  const [data, setData] = useState([]);
  const [Advice, setAdvice] = useState('null');
  

  useEffect(()=> 
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${selectedAdviceCat}`).then((res) => {
      setData(res.data);
    }, []));
    
  

  return (
    <div className="App">
      <div className="container">
        <div className="first-con">
        <button type="button" className="generate-family-btn">
          Family
          </button>
          <p className='family-advice'> </p>
        </div>
        
        <div className="first-con">
        <button type="button" className="generate-office-btn">
          Office
          </button>
          <p className='office-advice'> </p>
        </div>
        
        <div className="first-con">
        <button type="button" className="generate-party-btn">
          Party
          </button>
          <p className='party-advice'> </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
