import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import Login from './components/login/login';
import MainInfo from './components/mainInfo/mainInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/mainInfo"><MainInfo /></Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
