import React from 'react';
import BurgerGraphic from '../../Burger/BurgerGraphic/BurgerGraphic';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const CheckoutSummary = props => {
	return (
		<div className='checkout-summary'>
			<h1>Tasty!!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<BurgerGraphic ingredients={props.ingredients} />
			</div>
			<Button type='success' click>
				CONTINUE
			</Button>
			<Button type='danger' click>
				CANCEL
			</Button>
		</div>
	);
};

export default CheckoutSummary;
