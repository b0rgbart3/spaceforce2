
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import playIcon from "../../assets/play_circle_outline-24px.svg";
import pauseIcon from "../../assets/pause.svg";
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
    const SLIDE_DURATION = 5000;
    const [slideNumber, setSlideNumber] = useState(0);
    const [playing, setPlaying] = useState(true);
    const slideCount = result.length;
    console.log("slideCount: ", slideCount);

    let descriptionString = "";
    
    if (result[slideNumber] && result[slideNumber].data && result[slideNumber].data[0]) {
        let maxLength = 400;
        let descLength = maxLength;
        if (result[slideNumber].data[0].description.length < maxLength) {
            descLength = result[slideNumber].data[0].description.length;
        }
        descriptionString = result[slideNumber].data[0].description.slice(0, descLength);

    }

    // This useEffect is the code block that animates the slides.
    // Note:  The return includes a clearTimeout because if the
    // slideNumber changes or the playing state changes, we want
    // to stop the timer and clear it out.

    useEffect(
        () => {
        if (playing) {
           // console.log(slideCount);
          let slideTimer = setTimeout(() => {
            console.log(slideCount);
              // Computer science trick from Ryan Florence
              // that automatically starts over at zero if
              // we get to the end of our list (using math 
              // instead of a condition.... yay!)
            setSlideNumber( (slideNumber + 1) % slideCount);
            
        }, SLIDE_DURATION );
        return () => clearTimeout(slideTimer);
      }
      
    }, [slideNumber, playing, slideCount]);


    function next(e) {
        setSlideNumber( (slideNumber + 1) % result.length );
        setPlaying(false);
    }
    function prev(e) {
        setSlideNumber( (slideNumber -1  + result.length) % result.length );
        setPlaying(false);
    }
    function play(e) {
        console.log('toggle playing: ', playing);
        setPlaying( !playing );
    }
        return(<div className="result">
        {/* { result[slideNumber] ? "<p></p>" : "" } */}
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
                <div className="playButton" onClick={play}>
                    <img src={playing ? pauseIcon : playIcon} className="icon playIcon">
                    </img>
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