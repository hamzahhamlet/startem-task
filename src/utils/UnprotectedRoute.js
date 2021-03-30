import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnprotectedRoute = ({
	component: Component,
	path,
	isAuthenticated,
	...rest
}) => (
	<Route
		{...rest}
		exact
		path={path}
		render={(props) =>
			isAuthenticated ? (
				<Redirect to="/dashboard" />
			) : (
				<Component {...props} />
			)
		}
	/>
);

export default UnprotectedRoute;
