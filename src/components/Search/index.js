
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  receivedResults,
  selectResults,
  resultsAsync,
} from '../../resultsSlice.js';

function Search(props) {
    var textInput = useRef();
    let results = useSelector(selectResults);
    const dispatch = useDispatch();
    let [localResults, setLocalResults] = useState();
    const [query, setQuery] = useState('');
    let [resultsList, setResultsList] = useState([]);

    function initiateQuery() {
        let term = textInput.current.value;
        let query = "https://images-api.nasa.gov/search?q="+term;
        
        setQuery(query);

        fetch(query)
        .then(response => response.json())
        .then(data => {
           dispatch(receivedResults(data.collection.items));
            setLocalResults(data.collection.items);
            console.log(data.collection.items);
        
            setResultsList(data.collection.items);
        
    });

    }

        return (
            <div>
            <p>Search for images from the Nasa Public Image Bank:</p>
            <input type='text' ref={textInput}></input>
            <button onClick={initiateQuery}>SEARCH</button>
            <br></br>
            {resultsList.map((item, index)=>(
                <p k={index}>{item.data[0].description}.....</p>
            ))}
      
            </div>
        );
    


}

export default Search;