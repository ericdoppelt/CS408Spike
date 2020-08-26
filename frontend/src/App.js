import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Home/HomePage';
import Championship1991 from './Championships/Championship1991';


function App() {
  return (
      <BrowserRouter>
        <div className='App' style={{display: 'flex', width:'100%'}}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/1991" exact component={Championship1991}/>
        </div>
      </BrowserRouter>
    );
}

export default App;
