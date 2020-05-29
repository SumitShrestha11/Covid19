import React from 'react';
import './Loading.css';
import coronavirus from '../Navigation/coronavirus.svg';

const Loading = () => {
    return(
        <div class="loading-front">                  
            <div class="loading-text">
                loading
                <p class="dot" id="d1">.</p>
                <p class="dot" id="d2">.</p>
                <p class="dot" id="d3">.</p>
            </div>                                        
            <div class="loading-box"><img src={coronavirus} alt='covid19' /></div> 
        </div> 
    )
}

export default Loading;