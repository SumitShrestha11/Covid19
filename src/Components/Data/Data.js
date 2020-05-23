import React from 'react';
import './Data.css'

const Data = ({active,recovered,death}) =>{
    return(
        <div className='data-grid'>
            <div className='data-box box1'>Total Cases <br/>{active+recovered+death}</div>
            <div className='data-box box2'>Active Cases<br/> {active}</div>
            <div className='data-box box3'>Recovered Cases<br/> {recovered}</div>
            <div className='data-box box4'>Deaths<br/> {death}</div>
        </div>
    )
}

export default Data;