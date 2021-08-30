import React from 'react';
import SearchData from './SearchData';

function SearchOutput(props){
    const {superherodata=[]}=props;

    console.log('superherodata',superherodata);
    return (
      
    <div >
        {superherodata.map(superhero=><SearchData data={superhero}/>)}
    </div>
    );
}

export default SearchOutput;