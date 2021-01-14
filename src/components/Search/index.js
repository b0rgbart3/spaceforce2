
import React, { useState, useEffect, useRef } from "react";



function Search(props) {

    var textInput = useRef();

    function initiateQuery() {
        let term = textInput.current.value;
        let query = "https://images-api.nasa.gov/search?q="+term;
        
        fetch(query)
        .then(response => response.json())
        .then(data => console.log(data));
    }



        return (
            <div>
            <p>Search for images from the Nasa Public Image Bank:</p>
            <input type='text' ref={textInput}></input>
            <button onClick={initiateQuery}>SEARCH</button>
            
            
      
            </div>
        );
    


}

export default Search;