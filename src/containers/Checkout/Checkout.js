import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContacData from './ContactData/ContacData';

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: null,
			price: 0
		};
	}

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			if (param[0] === 'price') {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}
		this.setState({
			ingredients: ingredients,
			price: price
		});
	}

	onCheckoutContinue = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	onCheckoutCancel = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					onCheckoutContinue={this.onCheckoutContinue}
					onCheckoutCancel={this.onCheckoutCancel}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={props => (
						<ContacData
							ingredients={this.state.ingredients}
							price={this.state.price}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

export default withRouter(Checkout);
