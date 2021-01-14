
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
        return(<div>
            {result.map((item, index)=>(
                <p key={index}>{item.data[0].description}
                { item.links && item.links[0] ? (
                <img src={ item.links[0].href }></img>): <p></p>}
        
                </p>
            
            ))}
            </div>
        )
 }

export default Results;