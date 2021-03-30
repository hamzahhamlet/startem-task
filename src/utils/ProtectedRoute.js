import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
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
			isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
		}
	/>
);

export default ProtectedRoute;
