import React from 'react';
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Banner />
        <Switch>
          {/* <Route exact path='/' component={HomePage} /> */}
          {/* <Route component={HomePage} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
