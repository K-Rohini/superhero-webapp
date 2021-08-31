import React from 'react';
// import SearchData from './SearchData';
function SearchBar(props){
     console.log('props',props);
     const {handleChanges,SearchTerm}=props;

    return (
      
        <div>
            <input id="searchbar" type="search" placeholder="Search Super Heroes" onChange={handleChanges} value={SearchTerm}/>
               
        </div>
    );

}
export default SearchBar;