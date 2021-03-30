import {
	DASHBOARD_CREATE_PRODUCT,
	DASHBOARD_UPDATE_PRODUCT,
	DASHBOARD_DELETE_PRODUCT,
} from "../actions/actionTypes";

const initialState = {
	products: [],
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case DASHBOARD_CREATE_PRODUCT:
			return {
				...state,
				products: [action.product, ...state.products],
			};
		case DASHBOARD_UPDATE_PRODUCT:
			const productIndex = state.products.findIndex(
				(record) => record.id === action.product.id
			);

			if (productIndex !== -1) {
				const products = [...state.products];
				products[productIndex] = action.product;
				return {
					...state,
					products,
				};
			} else {
				return state;
			}
		case DASHBOARD_DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					(record) => record.id !== action.id
				),
			};
		default:
			return state;
	}
};

export default dashboardReducer;
