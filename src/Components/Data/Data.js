import React from 'react';
import './Data.css'

const Data = ({active,recovered,death}) =>{
    return(
        <div>
            <div className='data-grid'>
                <div className='data-box box1'><h1>Total Cases <br/>{active+recovered+death}</h1></div>
                <div className='data-box box2'><h3>Active Cases<br/> {active}</h3></div>
                <div className='data-box box3'><h3>Recovered Cases<br/> {recovered}</h3></div>
                <div className='data-box box4'><h3>Deaths<br/> {death}</h3></div>
            </div>
        </div>
    )
}

export default Data;