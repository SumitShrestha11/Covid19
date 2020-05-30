import React from 'react';
import './Loading.css';
import coronavirus from '../Navigation/coronavirus.svg';

const Loading = () => {
    return(
        <div className="loading-front">                  
            <div className="loading-text">
                loading
                <p className="dot" id="d1">.</p>
                <p className="dot" id="d2">.</p>
                <p className="dot" id="d3">.</p>
            </div>                                        
            <div className="loading-box"><img src={coronavirus} alt='covid19' /></div> 
        </div> 
    )
}

export default Loading;