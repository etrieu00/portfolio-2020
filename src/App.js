import React from 'react';
import './App.module.css';
import classes from './App.module.css';

import Traffic from './Navigation/Nav/Traffic';

import Home from './Layout/Home/Home';
import Career from './Layout/Career/Career';
import Contact from './Layout/Contact/Contact';
import About from './Layout/About/About';
const  App = () => {
  return (
    <div className={classes.App}>
      <Traffic/>
      <Home/>
      <Career/>
      <Contact/>
      <About/>
    </div> 
  );
}

export default App;
