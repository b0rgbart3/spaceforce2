import React, {useEffect, useState} from "react";
import logo from './assets/logo1.jpg';
import './style.css';
import Search from './components/Search';
import Results from './components/Results';
import { useSelector, useDispatch } from 'react-redux';
import {
selectResult
} from './resultsSlice.js';
import {
  selectQuery,
  newQuery
  } from './querySlice.js';
  
  


function Presets() {
  let presets = ["Apollo 11", "mars", "Space Shuttle", "Hubble", "Moon", "weightless", "gravity","zero gravity", "g-force", "lunar landing","Dark Side", "Black Holes", "pleiades", "pleiades star cluster", "Galaxy", "galaxies", "solar system", "star death","Milky Way", "Orion", "Lockheed Martin", "Jet propulsion", "Saturn", "Pluto","Venus", "Jupiter", "Jupiter's Moons", "LEWIS RESEARCH CENTER", "Space Station", "Earth", "Prometheus", "Pandora", "Cassini spacecraft", "Voyager", "Carl Sagan", "Chandra X-ray Observatory", "supernova", "Galaxy Evolution Explorer", "Spitzer Space Telescope", "radio emissions", "x-rays", "dark matter", "space walk", "Endeavour", "Bill Nye", "Neil deGrasse Tyson", "Cosmos", "Cape Canaveral", "Launch Pad", "Kennedy Space Center"];
  const dispatch = useDispatch();

  function setPreset(preset) {
  
    console.log(preset);
    dispatch(newQuery(preset));
  }
  

  return (
    <div>
      <h1>Presets</h1>
      <ul className='presetList'>
        {presets.map((preset, index) => (
          <li key={index} onClick={()=>setPreset(preset)} className="presetLink">{preset}</li>
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
    <Results></Results>
    </div>
  );
}

export default App;
