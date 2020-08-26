import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Home/HomePage';

function App() {
  return (
      <BrowserRouter>
        <div className='App' style={{display: 'flex', width:'100%'}}>
          <Route path="/" exact component={HomePage}/>
        </div>
      </BrowserRouter>
    );
}

export default App;
