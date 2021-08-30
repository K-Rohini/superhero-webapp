import React from 'react';

function SearchData(props){
  const {data}=props;
  console.log('data',data);
    return (
      
  
          <div className="searchoutput">
        <div className="img">
        <img src={data.image.url} alt="Hero pic" width="200px" height="300px "/>
        </div>
        <div className="Details">
           <h1>{data.name}</h1>
           <span style={{ color:'red', marginBottom: 5 }}>{data.biography['full-name']}</span>
        <div className="stats">
          <div>strength: {data.powerstats.strength}</div>
          <div>speed: {data.powerstats.speed}</div>
          <div>power: {data.powerstats.power}</div>
        </div>
      </div>
    </div>
   
    );
}

export default SearchData;