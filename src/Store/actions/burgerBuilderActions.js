import * as actionTypes from './actionsTypes';
import axios from '../../order-axios';

export const addIngredient = ingName => {
	return { type: actionTypes.ADD_INGREDIENT, ingredientName: ingName };
};

export const removeIngredient = ingName => {
	return { type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName };
};

export const setIngredients = ingredients => {
	return { type: actionTypes.SET_INGREDIENT, ingredients: ingredients };
};

export const fetchIngredientsFaild = () => {
	return { type: actionTypes.FETCH_INGREDIENT_FAILED };
};

export const initIngredient = () => {
	return dispatch => {
		axios
			.get('https://burgerbuilder-gc.firebaseio.com/ingredients.json')
			.then(response => {
				console.dir('REPONSE', response);
				dispatch(setIngredients(response.data));
			})
			.catch(error => {
				console.dir('ERROR', error);
				dispatch(fetchIngredientsFaild());
			});
	};
};
