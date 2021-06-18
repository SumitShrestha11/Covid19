import React, { useRef, useEffect } from 'react';
import './Map.css';
import { 
    geoMercator,
    geoCentroid,
    scaleSqrt,
    geoPath,select
 } from 'd3';

const Map=( {sortedData, statesGeojson} )=>{
    const svgDiv = useRef();

    useEffect(()=>{
        const width = 900;
        const height = 500;
        
        let cases = [];
        sortedData.forEach(datum=>{
            cases.push(datum.count)
        })
        
        const radiusScale = scaleSqrt();
        const radiusVal = d => cases[d.properties.ADM1_EN-1]/7;
        
        const projection = geoMercator()
            .center([84.5240,28.3949])
            .scale(5000);
        
        const path = geoPath()
        .projection(projection)
        console.log(sortedData)
        const svg = select(svgDiv.current).selectAll('svg').data([sortedData]).join('svg')
        .attr('viewBox',`0 0 ${width} ${height}`)//'min-x min-y width height'
        .attr('preserveAspectRatio',"xMidYMid meet")
        .attr('class','data-box svg-content');

        svg.selectAll("path")
        .data(statesGeojson)
    .enter().append("path")
        .attr('class','states')
    .attr("d", path)
    .append('title')
        .text(d => `Province ${d.properties.ADM1_EN}`);
        
    svg.selectAll("circle")
        .data(statesGeojson)
    .enter().append("circle")
        .attr('class','cases-circle')
        .attr('r',d => radiusScale(radiusVal(d)))
      .attr('cx',d=>projection(geoCentroid(d))[0])
      .attr('cy',d=>projection(geoCentroid(d))[1])
      .append('title')
        .text(d => cases[d.properties.ADM1_EN-1]+' cases')
        
    },[sortedData,statesGeojson]);
    return(
        <div className='svg-container' ref={svgDiv}></div>
        
    )
}



export default Map;