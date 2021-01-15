
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



function Results() {
    let result = useSelector(selectResult);
    const [slideNumber, setSlideNumber] = useState(0);

    function next(e) {
        setSlideNumber( (slideNumber + 1) % result.length );
    }
    function prev(e) {
        setSlideNumber( (slideNumber -1  + result.length) % result.length );
    }
        return(<div className="result">

         {
             result[slideNumber] && result[slideNumber].links && result[slideNumber].links[0] ?
             <div className="nasaImage"><img src={result[slideNumber].links[0].href}></img></div>  :
             <p></p>
         }
         {
             result[slideNumber] && result[slideNumber].data && result[slideNumber].data[0] ?
             <div className="description">{result[slideNumber].data[0].description}</div> :
             <p></p>
         }
         <div onClick={prev}>Previous</div><div onClick={next}>Next</div>
            {/* {result.map((item, index)=>(
                <p key={index}>{item.data[0].description}
                { item.links && item.links[0] ? (
                <img src={ item.links[0].href }></img>): <p></p>}
        
                </p>
            
            ))} */}
            </div>
        )
 }

export default Results;