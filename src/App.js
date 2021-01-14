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
  return (
    <div>
      <h1>Presets</h1>
      <ul>
        <li>Appollo 11</li>
        <li>Mars</li>
        <li>Space Shuttle</li>
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
    {result.map((item)=>(
      <p>{item.data[0].description}</p>
    ))}
    </div>
  );
}

export default App;
