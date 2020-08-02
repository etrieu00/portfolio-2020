import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.module.css';
import classes from './App.module.css';

import Traffic from './Navigation/Nav/Traffic';

import {ReactComponent as DashesH} from './Resources/SVG/Dashes-H.svg';
import {ReactComponent as DashesV} from './Resources/SVG/Dashes-V.svg';
import {ReactComponent as Logo} from './Resources/SVG/Logo.svg';

import Home from './Layout/Home/Home';
import Career from './Layout/Career/Career';
import Contact from './Layout/Contact/Contact';
import About from './Layout/About/About';
const  App = () => {
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Logo className={classes.Logo}/>
				{/* <DashesH className={classes.DashesHorizontal}/> */}
				<DashesV className={classes.DashesVertical}/>
				{/* <Traffic/> */}
				<Route path="/" component={Home}/>
				<Route path="/" component={Career}/>
				<Route path="/" component={Contact}/>
				<Route path="/" component={About}/> 
				{/* <Home/>
				<Career/>
				<Contact/>
				<About/> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
