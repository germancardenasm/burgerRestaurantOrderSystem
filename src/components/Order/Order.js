import React from 'react';
import './Order.css';

const Order = props => {
	console.log('PROPS', props);
	const ingredients = [];
	for (let ingName in props.ingredients) {
		ingredients.push({
			ingredient: [ingName],
			amount: props.ingredients[ingName]
		});
	}
	const ingOutput = ingredients.map(ing => {
		return (
			<span key={ing.ingredient}>
				{ing.ingredient}({ing.amount}){' '}
			</span>
		);
	});
	console.log('INgredients', ingredients);
	return (
		<div className='order'>
			<p>Ingredients: {ingOutput}</p>
			<p>
				Price: <strong>USD${props.price}</strong>
			</p>
		</div>
	);
};

export default Order;
