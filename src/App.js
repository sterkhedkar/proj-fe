import React from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import AppComponent from "./Component/AppComponent"

function App() {
  return ( 
    <Router>
    <Switch>

      <AppComponent />
  
    </Switch>
  </Router>
  );
}

export default App;
