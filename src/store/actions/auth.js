import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from "./actionTypes";

export const authLogin = (user) => {
	return {
		type: AUTH_LOGIN_SUCCESS,
		user,
	};
};

export const authLogout = () => {
	return {
		type: AUTH_LOGOUT_SUCCESS,
	};
};
