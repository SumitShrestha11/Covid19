import React from 'react';
import './Navigation.css';
import coronavirus from './coronavirus.svg'

const Navigation = (props) =>{
    return(
        <nav className='navbar'>
            <div className='logo'> 
                <img src={coronavirus} alt="covid19-logo" />
            </div>
            <p
            id='getData'
            onClick={props.buttonClick}
            >Data</p>
            
            <p id='getNews'
            onClick={props.getNews}
            >News</p>
        </nav>
    )
}

export default Navigation;