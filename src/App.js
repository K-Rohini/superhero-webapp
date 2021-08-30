import React, { useState } from 'react'; 
import Header from './header';
import SearchBar from './SearchBar';
// import SearchData from './SearchData';
import SearchOutput from './SearchOutput';

function App() {
  
    const [ SearchTerm ,setSearchTerm]=useState('');
    const [superherodata,setsuperherodata]=useState([]);
    
    async function searchSuperHeroes(){
        const response = await fetch(`https://www.superheroapi.com/api.php/3048856572034660/search/${SearchTerm}`);
        const data=await response.json();
        console.log("searchSuperHeroes->data",data)

         setsuperherodata(data.results);
    }

    function handleChanges(e){
        const SearchData=e.target.value;

        setSearchTerm(SearchData);
        if(SearchData.length===0){
          setsuperherodata([]);
        }
        if (SearchData.length>3){
            searchSuperHeroes();
        }
    }
  return (
    <div className="App">
      <Header/>
      <div className="header2">
     < SearchBar SearchTerm={SearchTerm} handleChanges={handleChanges}/>
     <SearchOutput superherodata={superherodata}/>
     </div>
    </div>
  );
  
}

export default App;
