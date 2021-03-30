import {
	DASHBOARD_CREATE_PRODUCT,
	DASHBOARD_UPDATE_PRODUCT,
	DASHBOARD_DELETE_PRODUCT,
} from "./actionTypes";

export const dashboardCreateProduct = (product) => {
	return {
		type: DASHBOARD_CREATE_PRODUCT,
		product,
	};
};

export const dashboardUpdateProduct = (product) => {
	return {
		type: DASHBOARD_UPDATE_PRODUCT,
		product,
	};
};

export const dashboardDeleteProduct = (id) => {
	return {
		type: DASHBOARD_DELETE_PRODUCT,
		id,
	};
};
