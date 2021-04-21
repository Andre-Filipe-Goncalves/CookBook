import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/AboutMe/Home";
import MyProjects from "./components/MyProjects/MyProjects"
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <Router>
      <ul className="Nav">
        <li><NavLink activeClassName='NavLink' exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='Navlink' to='/MyProjects'>My Projects</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path ='/MyProjects' component={MyProjects} />
      </Switch>
    </Router>
  );
}

export default App;
