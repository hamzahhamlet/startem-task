import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import UnprotectedRoute from "./utils/UnprotectedRoute";

// Stylesheets
import "./assets/css/material-dashboard.css?v=2.1.2";
import "./assets/demo/demo.css";

// Pages
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Tables from "./pages/Tables";
import Typography from "./pages/Typography";
import Icons from "./pages/Icons";
import Map from "./pages/Map";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";

const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<ProtectedRoute
					path="/dashboard"
					component={Dashboard}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/user"
					component={User}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/tables"
					component={Tables}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/typography"
					component={Typography}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/icons"
					component={Icons}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/map"
					component={Map}
					isAuthenticated={props.isAuthenticated}
				/>
				<ProtectedRoute
					path="/notifications"
					component={Notifications}
					isAuthenticated={props.isAuthenticated}
				/>
				<UnprotectedRoute
					path="/login"
					component={Login}
					isAuthenticated={props.isAuthenticated}
				/>
				<UnprotectedRoute
					path="/"
					component={Login}
					isAuthenticated={props.isAuthenticated}
				/>
			</Switch>
		</BrowserRouter>
	);
};

function mapStateToProps(state) {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
}

export default connect(mapStateToProps)(App);
