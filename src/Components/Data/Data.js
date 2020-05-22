import React from 'react';

const Data = ({active,recovered,death}) =>{
    return(
        <div>
            <ul>
            <li>Total Cases: {active+recovered+death}</li>
            <li>Active Cases: {active}</li>
            <li>Recovered Cases: {recovered}</li>
            <li>Deaths: {death}</li>
            </ul>
        </div>
    )
}

export default Data;