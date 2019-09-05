import * as actionType from '../actions/actionsTypes';

const initialState = {
	orders: [],
	loading: false,
	purchased: false,
	loadingOrders: true,
	loadingOrdersError: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.PURCHASE_INIT:
			return {
				...state,
				purchased: false
			};
		case actionType.PURCHASE_BURGER_START:
			return {
				...state,
				loading: true,
				loadingOrders: true
			};
		case actionType.PURCHASE_BURGER_SUCCESS:
			const newOrder = {
				...action.orderData,
				id: action.id
			};
			return {
				...state,
				loading: false,
				purchased: true,
				orders: state.orders.concat(newOrder)
			};

		case actionType.PURCHASE_BURGER_FAIL:
			return {
				...state,
				loading: false,
				loadingOrdersError: true
			};

		case actionType.GET_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.orders,
				loadingOrders: false
			};

		case actionType.GET_ORDERS_FAIL:
			return {
				...state,
				loadingOrders: false
			};

		default:
			return {
				...state
			};
	}
};

export default reducer;
