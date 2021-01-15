
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import playIcon from "../../assets/play_circle_outline-24px.svg";
import prevIcon from "../../assets/skip_previous-24px.svg";
import nextIcon from "../../assets/skip_next-24px.svg";
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

    let descriptionString = "";
    
    if (result[slideNumber] && result[slideNumber].data && result[slideNumber].data[0]) {
        let maxLength = 400;
        let descLength = maxLength;
        if (result[slideNumber].data[0].description.length < maxLength) {
            descLength = result[slideNumber].data[0].description.length;
        }
        descriptionString = result[slideNumber].data[0].description.slice(0, descLength);

    }

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
             <div className="description">{descriptionString}</div> :
             <p></p>
         }
         <div className="slideNavigation flex-container center">
            <div className='navWrapper flex-container center'>
                <div onClick={prev} >
                <img src={prevIcon} className="icon"></img>
                </div>
                <div className="playButton">
                    <img src={playIcon} className="icon"></img>
                </div>
                <div onClick={next} >
                <img src={nextIcon} className="icon"></img>
                </div>
            </div>
         </div>
         
    
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