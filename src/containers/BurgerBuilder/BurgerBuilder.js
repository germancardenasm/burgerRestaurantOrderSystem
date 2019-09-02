import React, { Component } from 'react';
import BurgerGraphic from '../../components/Burger/BurgerGraphic/BurgerGraphic';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import prices from '../../assets/prices';
import './BurgerBuilder.css';
import OrderSumary from '../../components/OrderSumary/OrderSumary';
import axios from '../../order-axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		price: 0,
		purchaseAvailable: false,
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axios
			.get('https://burgerbuilder-gc.firebaseio.com/ingredients.json')
			.then(response => {
				console.dir('REPONSE', response);
				this.setState({ ingredients: response.data });
			})
			.catch(error => {
				this.setState({ error: true });
			});
	}

	addIngredients = ing => {
		this.setState(
			(state, props) => ({
				ingredients: {
					...state.ingredients,
					[ing]: state.ingredients[ing] + 1
				},
				price: state.price + prices[ing]
			}),
			() => this.setPurchaseAvailability()
		);
	};

	removeIngredients = ing => {
		if (this.state.ingredients[ing] === 0) return;
		this.setState(
			(state, props) => ({
				ingredients: {
					...state.ingredients,
					[ing]: state.ingredients[ing] - 1
				},
				price: state.price - prices[ing]
			}),
			() => this.setPurchaseAvailability()
		);
	};

	setPurchaseAvailability = () => {
		const ingredients = Object.keys(this.state.ingredients).reduce(
			(acc, curr) => {
				return acc + this.state.ingredients[curr];
			},
			0
		);
		if (ingredients) {
			this.setState({ purchaseAvailable: true });
		} else {
			this.setState({ purchaseAvailable: false });
		}
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	placeOrder = () => {
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(
				encodeURI(i) + '=' + encodeURI(this.state.ingredients[i])
			);
		}
		queryParams.push('price=' + this.state.price);
		const queryString = queryParams.join('&');
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	};

	render() {
		let orderSumary = (
			<OrderSumary
				{...this.state}
				close={this.purchaseCancelHandler}
				purchase={this.placeOrder}
			/>
		);
		if (this.state.loading) {
			orderSumary = <Spinner />;
		}

		let burgerComponentes = this.state.error ? (
			<p>Ingredients can not be loaded</p>
		) : (
			<Spinner />
		);

		if (this.state.ingredients) {
			burgerComponentes = (
				<Aux>
					<BurgerGraphic ingredients={this.state.ingredients} />
					<BuildControls
						{...this.state}
						addIngredients={this.addIngredients}
						removeIngredients={this.removeIngredients}
						purchase={this.purchaseHandler}
					/>
				</Aux>
			);
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					close={this.purchaseCancelHandler}
				>
					{orderSumary}
				</Modal>
				{burgerComponentes}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
