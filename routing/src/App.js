import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import One from './One'
import Two from './Two'
import Three from './Three'

import Nav from './Nav'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/One'>
            <One/>
          </Route>
          <Route path='/Two'>
            <Two/>
          </Route>
          <Route path='/Three'>
            <Three/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
