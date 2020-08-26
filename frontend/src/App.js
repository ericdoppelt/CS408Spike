import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Home/HomePage';
import Championship1991 from './Championships/Championship1991';
import Championship1992 from './Championships/Championship1992';
import Championship2001 from './Championships/Championship2001';
import Championship2010 from './Championships/Championship2010';

function App() {
  return (
      <Router>
        <div className='App' style={{display: 'flex', width:'100%'}}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/championships/1991" component={Championship1991}/>
          <Route path='/championships/1992' component={Championship1992}/>
          <Route path='/championships/2001' component={Championship2001}/>
          <Route path='/championships/2010' component={Championship2010}/>

        </div>
      </Router>
    );
}

export default App;
