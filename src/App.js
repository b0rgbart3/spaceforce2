import React, { useEffect, useState } from "react";
import logo from "./assets/logo1.jpg";
import "./style.css";
import Search from "./components/Search";
import Results from "./components/Results";
import { useSelector, useDispatch } from "react-redux";
import { selectResult } from "./resultsSlice.js";
import { selectQuery, newQuery } from "./querySlice.js";
import Presets from "./components/Presets";

const options = ["one", "two", "three"];
const defaultOption = options[0];

function App() {
  let result = useSelector(selectResult);
  let query = useSelector(selectQuery);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" /> */}
        <Search />
        <Presets />

      </div>


      {query && query != "" ? (
        <Results></Results>
      ) : (
        <p className="instructions">
          Choose a topic or enter a search term to get started.
        </p>
      )}
    </div>
  );
}

export default App;
