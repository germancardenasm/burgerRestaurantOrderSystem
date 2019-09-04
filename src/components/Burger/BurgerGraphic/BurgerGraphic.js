import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import './BurgerGraphic.css';

const BurgerGraphic = props => {
	let ingCompArr = [];

	if (props.ingredients) {
		ingCompArr = Object.keys(props.ingredients)
			.map(ingType => {
				return [...Array(props.ingredients[ingType])].map((_, i) => {
					return <Ingredient type={ingType} key={ingType + i} />;
				});
			})
			.reduce((acc, curr) => {
				return acc.concat(curr);
			}, []);
	}

	return (
		<div className='burger'>
			<Ingredient type='bread_top' />
			{ingCompArr.length ? (
				ingCompArr
			) : (
				<p className='bold'>Let's add some ingredients</p>
			)}
			<Ingredient type='bread_bottom' />
		</div>
	);
};
export default BurgerGraphic;
