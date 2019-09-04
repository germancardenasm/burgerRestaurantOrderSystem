import * as actionTypes from './actionsTypes';
import axios from '../../order-axios';

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};

export const purchaseBurgerFail = error => {
	return { type: actionTypes.PURCHASE_BURGER_FAIL, error: error };
};

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	};
};

export const puchaseBurger = orderData => {
	return dispatch => {
		dispatch(purchaseBurgerStart());

		axios
			.post('/orders.json', orderData)
			.then(response => {
				dispatch(purchaseBurgerSuccess(response.data.name, orderData));
			})
			.catch(error => dispatch(purchaseBurgerFail(error)));
	};
};

export const purchaseInit = () => {
	return { type: actionTypes.PURCHASE_INIT };
};
