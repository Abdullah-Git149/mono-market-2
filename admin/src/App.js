import React, { Component, useDebugValue, useEffect } from 'react';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Shared/Layout';
 import Login from './components/Authentication/login';
 import ForgotPassword from './components/Authentication/forgotpassword';
// import SignUp from './components/Authentication/signup';
// import ForgotPassword from './components/Authentication/forgotpassword';
// import NotFound from './components/Authentication/404';
// import Maintenance from './components/Authentication/maintenance';
import Dashboard from './components/Dashboard/dashboard';

import {useSelector, useDispatch} from 'react-redux';

const cookies = new Cookies();

const Routing = () => {

	//const {token} = useSelector((state) => state.userReducer);	\
	const token = cookies.get('token');
	const history = useHistory();
	const dispatch = useDispatch();

   useEffect(() => {

			if(token){              
			  dispatch({type: 'USER_SIGNIN_SUCCESS', payload: token})

			}
			else{
			history.push('/login');
			}

   },[])
	return(
	   <Switch>
			 <Route exact path="/">
			 <Dashboard />
		  </Route>
		  <Route path="/login">
			 <Login />
		  </Route>
		  <Route path="/forgotpassword">
			 <ForgotPassword />
		  </Route>
		  <Route component={Layout}></Route>
		  {/* <Route exact path="/profile">
			 <Profile />
		  </Route>
		  <Route path="/signup">
			 <Signup />
		  </Route>
		  <Route path="/create">
			 <CreatePost />
		  </Route>
		  <Route path="/profile/:userid">
			 <UserProfile />
		  </Route>
		  <Route path="/post/:postid">
			 <SinglePost />
		  </Route>
		  <Route path="/myfollowingpost">
			 <SubscribeUserPosts />
		  </Route> */}
	  </Switch>
	)
 }
 


function App() {
	
	const {settings} = useSelector((state) => state);
	
	const { themeColor, fontStyle, lightVersion, RtlVersion, offcanvas, miniSidebar, horizontalMenu, miniHover } = settings
	document.getElementsByTagName('body')[0].className = `${themeColor} ${fontStyle}${lightVersion ? ' light_version' : ''}${RtlVersion ? ' rtl' : ''}${offcanvas ? ' offcanvas-active' : ''}${horizontalMenu ? ' h-menu' : ''}${miniSidebar ? ' mini_sidebar' : ''}${miniHover ? ' mini_hover' : ''}`;
	return (
		<Router>
		<Routing />
		</Router>
				// <Router>
				// 	<Switch>					
				// 		<Route path="/signup" component={SignUp} />
				// 		<Route path="/login" component={Login} />	
				// 		<Route path="/dashboard" component={Dashboard} />
				// 		<Route path="/notfound" component={NotFound} />
				// 		<Route path="/maintenance" component={Maintenance} />
				// 		<Route component={Layout} />
				// 	</Switch>
				// </Router>        
	
	);
  }
  
  export default App;