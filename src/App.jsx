import React, { useState } from 'react'
import { useAppContext } from './components/AppContext';
import MovieSearch from './components/MovieSearch';
import './App.css'; 
function App() {
  const {gettingDataFromOmdb}=useAppContext();
  const [input,setInput]=useState('');
  const [data,setData]=useState(null);
  const handleClick=async(e)=>{
    if(input==""){
      alert("enter a movie name");
      return;
    }
    const response=await gettingDataFromOmdb(input);
    if(response==null){
      alert("invalid movie Name");
    }
    setData(response);
    setInput("");
  }
  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie Finder</h1>
      <div className="search-box">
        <input 
          className="search-input"
          value={input} 
          onChange={(e)=>setInput(e.target.value)} 
          placeholder='Enter movie name'
        />
        <button className="search-button" onClick={handleClick}>Search</button>
      </div>

      {data && <MovieSearch details={data.Search}/>}
    </div>
  )
}

export default App
