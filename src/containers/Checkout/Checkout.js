import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 1,
				meat: 1,
				bacon: 1,
				chesse: 1
			}
		};
	}

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({
			ingredients: ingredients
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
			</div>
		);
	}
}

export default withRouter(Checkout);
