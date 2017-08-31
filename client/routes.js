import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './components/SignupPage';
import Profile from './components/ProfilePage';
import NotFoundPage from './components/NotFoundPage';

const Routes = (
  	<Router>
		<Route exact path="/" component={HomePage}/>
		<Route path="/get-started" component={Signup}/>
		<Route path="/profile" component={Profile}/>
	</Router>
);

export default Routes;