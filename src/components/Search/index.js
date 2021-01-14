
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectResult,
  newResults,
} from '../../resultsSlice.js';

function Search(props) {
    var textInput = useRef();
    // let results = useSelector(selectResults);
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    let [resultsList, setResultsList] = useState([]);

    function initiateQuery() {
        let term = textInput.current.value;
        let query = "https://images-api.nasa.gov/search?q="+term;
        
        setQuery(query);

        fetch(query)
        .then(response => response.json())
        .then(data => {
            if (data && data.collection && data.collection.items) {
              //dispatch(receivedResults(data.collection.items));
              dispatch(newResults(data.collection.items));
              setResultsList(data.collection.items);
              console.log(data.collection.items);
            } else {
                dispatch(newResults([]));
                setResultsList([]);
            }
        
    });

    }

        return (
            <div>
            <p>Search for images from the Nasa Public Image Bank:</p>
            <input type='text' ref={textInput}></input>
            <button onClick={initiateQuery}>SEARCH</button>
            {/* <br></br>
            {resultsList ? resultsList.map((item, index)=>(
                <p k={index}>{item.data[0].description}.....</p>
            )) : <p>No results yet</p>}
       */}
            </div>
        );
    


}

export default Search;