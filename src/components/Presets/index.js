import React, { useEffect, useState } from "react";
import logo from "../../assets/logo1.jpg";
import "../../style.css";
import Search from "../../components/Search";
import Results from "../../components/Results";
import { useSelector, useDispatch } from "react-redux";
import { selectResult } from "../../resultsSlice.js";
import { selectQuery, newQuery } from "../../querySlice.js";

const presets = [
  "Apollo 11",
  "mars",
  "Space Shuttle",
  "Hubble",
  "Moon",
  "weightless",
  "gravity",
  "zero gravity",
  "g-force",
  "lunar landing",
  "Dark Side",
  "Black Holes",
  "pleiades",
  "pleiades star cluster",
  "Galaxy",
  "galaxies",
  "solar system",
  "star death",
  "Milky Way",
  "Orion",
  "Lockheed Martin",
  "Jet propulsion",
  "Saturn",
  "Pluto",
  "Venus",
  "Jupiter",
  "Jupiter's Moons",
  "LEWIS RESEARCH CENTER",
  "Space Station",
  "Earth",
  "Prometheus",
  "Pandora",
  "Cassini spacecraft",
  "Voyager",
  "Carl Sagan",
  "Chandra X-ray Observatory",
  "supernova",
  "Galaxy Evolution Explorer",
  "Spitzer Space Telescope",
  "radio emissions",
  "x-rays",
  "dark matter",
  "space walk",
  "Endeavour",
  "Bill Nye",
  "Neil deGrasse Tyson",
  "Cosmos",
  "Cape Canaveral",
  "Launch Pad",
  "Kennedy Space Center",
];

function Presets() {
  const dispatch = useDispatch();
  function selectPreset(e) {
      let searchTerm = "";
    // console.log('selected: ', e.target.value);
    if (e.target.value != "Topics") {
      searchTerm = e.target.value;
    }
    dispatch(newQuery(searchTerm));
  }

  return (
      <>
      <label>Topics:&nbsp;&nbsp;</label>
    <select onChange={selectPreset} className="presetSelect">
      {presets.map((preset, index) => (
        <option key={index} onClick={selectPreset} className="presetLink">
          {preset}
        </option>
      ))}
    </select>
    </>
  );
}

export default Presets;