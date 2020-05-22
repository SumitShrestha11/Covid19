import React from 'react';

const Navigation = (props) =>{
    return(
        <div>
            <button 
            id='getData'
            onClick={props.buttonClick}
            >Get Data</button>
            
            <button id='getNews'
            onClick={props.getNews}
            >Get News</button>
        </div>
    )
}

export default Navigation;