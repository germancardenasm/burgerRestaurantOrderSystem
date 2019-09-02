import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const OrderSumary = props => {
	let ingredientSummary = null;

	if (props.ingredients) {
		ingredientSummary = Object.keys(props.ingredients).map(ing => {
			return (
				<li key={ing}>
					{ing}: {props.ingredients[ing]}
				</li>
			);
		});
	}

	return (
		<Aux>
			<h4>Order Summary:</h4>
			<h5>Product: Hamburger</h5>
			<ul>{ingredientSummary}</ul>
			<p>Total: ${props.price.toFixed(2)}</p>
			<Button click={props.close} type={'danger'}>
				CANCEL
			</Button>
			<Button click={props.purchase}>CONTINUE</Button>
		</Aux>
	);
};

export default OrderSumary;
