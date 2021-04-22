import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/AboutMe/Home";
import MyProjects from "./components/MyProjects/MyProjects"
import Navbar from "./components/NavBar/NavBar";


function App() {
  return (
    <Router>
       <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path ='/MyProjects' component={MyProjects} />
      </Switch>
    </Router>
  );
}

export default App;
