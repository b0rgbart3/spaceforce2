
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectResult,
  newResults,
} from '../../resultsSlice.js';
import {
    selectQuery,
    newQuery
  } from '../../querySlice.js';



function Search(props) {
    var textInput = useRef();
    // let results = useSelector(selectResults);
    const dispatch = useDispatch();

    //const [localQuery, setLocalQuery] = useState('');
    let [resultsList, setResultsList] = useState([]);
    let result = useSelector(selectResult);
    let query = useSelector(selectQuery);

    useEffect(() => {
        
        console.log("In search index, a new query was set.");
       // setLocalQuery(query);
       grabData(query);
       textInput.current.value = query;
       
    }, [query]);

    function grabData(term) {
        let endpoint = "https://images-api.nasa.gov/search?q="+term;
        
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (data && data.collection && data.collection.items) {
      
              dispatch(newResults(data.collection.items));
              setResultsList(data.collection.items);
              console.log(data.collection.items);
            } else {
                dispatch(newResults([]));
                setResultsList([]);
            }
            });
        }

    function initiateQuery() {
        let term = textInput.current.value;
        
        if (!term || term.length < 3) {
           term = "";
        }
        //setQuery(endpoint);
        dispatch(newQuery(term));
        grabData(term);
        
        
    }

    let localQuery = query + "";

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