import React, { Component } from 'react';
import { connect } from 'react-redux';
import BurgerGraphic from '../../components/Burger/BurgerGraphic/BurgerGraphic';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import './BurgerBuilder.css';
import OrderSumary from '../../components/OrderSumary/OrderSumary';
import axios from '../../order-axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionType from '../../Store/actions';

class BurgerBuilder extends Component {
	state = {
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		/* axios
			.get('https://burgerbuilder-gc.firebaseio.com/ingredients.json')
			.then(response => {
				console.dir('REPONSE', response);
				this.setState({ ingredients: response.data });
			})
			.catch(error => {
				this.setState({ error: true });
			}); */
	}

	setPurchaseAvailability = () => {
		const ingredients = Object.keys(this.props.ings).reduce((acc, curr) => {
			return acc + this.props.ings[curr];
		}, 0);
		return ingredients > 0;
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	placeOrder = () => {
		this.props.history.push('/checkout');
	};

	render() {
		let orderSumary = (
			<OrderSumary
				price={this.props.price}
				ingredients={this.props.ings}
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

		if (this.props.ings) {
			burgerComponentes = (
				<Aux>
					<BurgerGraphic ingredients={this.props.ings} />
					<BuildControls
						price={this.props.price}
						ingredients={this.props.ings}
						purchaseAvailable={this.setPurchaseAvailability(
							this.props.ings
						)}
						addIngredients={this.props.oningredientAdded}
						removeIngredients={this.props.oningredientRemoved}
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

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.price
	};
};
const mapDispatchToProps = dispatch => {
	return {
		oningredientAdded: ingName => {
			dispatch({
				type: actionType.ADD_INGREDIENT,
				ingredientName: ingName
			});
		},

		oningredientRemoved: ingName => {
			dispatch({
				type: actionType.REMOVE_INGREDIENT,
				ingredientName: ingName
			});
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
