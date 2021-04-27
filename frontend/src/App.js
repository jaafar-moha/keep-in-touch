import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import './App.css';
import Contact from './Components/contact';
import Home from './Components/Home'
import Reply from './Components/Reply';

const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/add" component={Contact} />
        <Route  path="/Reply/:id" component={Reply} />
      </Switch>
    </Router>
  );
}

export default App;
