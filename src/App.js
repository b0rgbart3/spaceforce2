import React, {useEffect, useState} from "react";
import logo from './assets/logo1.jpg';
import './style.css';
import Search from './components/Search/index.js';
import { useSelector, useDispatch } from 'react-redux';
import {
selectResults
} from './resultsSlice.js';


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
function Results() {
  let results = useSelector(selectResults);

  let resultItems = results.value ? results.value.map((item) =>
  <li>{item}</li>) : null;

  return (<div>Results:

{/* <ul>{resultItems}</ul> */}
{results.value? results.value.forEach((item)=><p>{item}</p>): <p>No results yet...</p>}

  </div>)
}

function App() {
  let results = useSelector(selectResults);
  let [myResults, setMyResults] = useState( {} );

  useEffect(() => {

  },[myResults]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search></Search>
    <Presets />
    {/* <Results /> */}
    {results.value? results.value.forEach((item)=><p>{item}</p>): <p>No results yet...</p>}
    </div>
  );
}

export default App;
