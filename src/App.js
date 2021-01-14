import React, {useEffect, useState} from "react";
import logo from './assets/logo1.jpg';
import './style.css';
import Search from './components/Search/index.js';
import { useSelector, useDispatch } from 'react-redux';
import {
selectResult
} from './resultsSlice.js';
import {
  selectQuery,
  newQuery
  } from './querySlice.js';
  
  


function Presets() {
  let presets = ["Apollo 11", "mars", "Space Shuttle", "Hubble", "Moon"];
  const dispatch = useDispatch();

  function setPreset(preset) {
  
    console.log(preset);
    dispatch(newQuery(preset));
  }
  

  return (
    <div>
      <h1>Presets</h1>
      <ul>
        {presets.map((preset, index) => (
          <li key={index} onClick={()=>setPreset(preset)}>{preset}</li>
        ))}
      </ul>
    </div>
  )
}


function App() {
  let result = useSelector(selectResult);
  let query = useSelector(selectQuery);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search></Search>
    <Presets />

    <h2>Current Query: {query}</h2>
    {result.map((item, index)=>(
      <p key={index}>{item.data[0].description}
      { item.links && item.links[0] ? (
      <img src={ item.links[0].href }></img>): <p></p>}

      </p>
     
    ))}
    </div>
  );
}

export default App;
