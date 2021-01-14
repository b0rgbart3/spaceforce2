import React from "react";
import logo from './assets/logo1.jpg';
import './style.css';
import Search from './components/Search/index.js';
import { Counter } from './features/counter/Counter';

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
  return (<div>Results:</div>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search></Search>
    <Presets />
    <Results />
    <Counter />
    </div>
  );
}

export default App;
