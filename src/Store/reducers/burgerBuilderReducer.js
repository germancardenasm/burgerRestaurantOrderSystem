import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0
	},
	price: 4
};

const PRICE = {
	salad: 0.45,
	cheese: 0.6,
	bacon: 0.75,
	meat: 1.45
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]:
						state.ingredients[action.ingredientName] + 1
				},
				price: state.price + PRICE[action.ingredientName]
			};

		case actionTypes.REMOVE_INGREDIENT:
			if (state.ingredients[action.ingredientName] === 0)
				return { ...state };
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]:
						state.ingredients[action.ingredientName] - 1
				},
				price: state.price - PRICE[action.ingredientName]
			};

		default:
			return state;
	}
};

export default reducer;
