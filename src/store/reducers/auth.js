import {
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
	users: [{ email: "startem@gmail.com", password: "123123" }],
	isAuthenticated: false,
	user: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: action.user,
			};
		case AUTH_LOGOUT_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
				user: {},
			};
		default:
			return state;
	}
};

export default authReducer;
