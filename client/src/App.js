import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Main}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
