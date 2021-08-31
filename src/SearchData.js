import React from 'react';
import {Link} from 'react-router-dom'

function SearchData(props) {
  const { data } = props;
  console.log('data', data);
  return (


    <div className="searchoutput">
      <div className="img">
        <img src={data.image.url} alt="Hero pic" width="200px" height="300px " />
      </div>
      <div className="Details">
        <h1>{data.name}</h1>
        <span style={{ color: 'grey', marginBottom: 5 ,paddingBottom:5 , fontWeight:'bold' }}>{data.biography['full-name']}</span>
        <div className="stats">
          <div>Id:{data.id}</div>
          <div>Gender :{data.appearance.gender}</div>
          <div>Strength : {data.powerstats.strength}</div>
          <div>Speed : {data.powerstats.speed}</div>
        {/* <div className='link'> <li><Link to={"/ReadMore"}>readmore</Link> </li> </div> */}
        </div>
      </div>
    </div>

  );
}

export default SearchData;