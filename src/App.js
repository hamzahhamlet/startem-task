import React from "react";

// Stylesheets
import "./assets/css/material-dashboard.css?v=2.1.2";
import "./assets/demo/demo.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Tables from "./pages/Tables";
import Typography from "./pages/Typography";
import Icons from "./pages/Icons";
import Map from "./pages/Map";
import Notifications from "./pages/Notifications";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/user" component={User} />
				<Route exact path="/tables" component={Tables} />
				<Route exact path="/typography" component={Typography} />
				<Route exact path="/icons" component={Icons} />
				<Route exact path="/map" component={Map} />
				<Route exact path="/notifications" component={Notifications} />
				<Route exact path="/" render={(props) => <h1>Home Page</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
