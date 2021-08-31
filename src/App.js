import React from 'react'; 
import { Switch,Route } from 'react-router-dom';

import Hero from './pages/Hero';
import Home from './pages/Home'


function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/favourite'>
          <div>Hello from Fav</div>
        </Route>
        <Route exact path='/hero/:id'>
          <Hero/>
        </Route>
      </Switch>
    </div>
  );
  
}

export default App;
