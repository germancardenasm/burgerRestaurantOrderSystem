import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContacData from './ContactData/ContacData';
import * as actionTypes from '../../Store/actions/actionsTypes';
import * as actions from '../../Store/actions/actionIndex';
import { connect } from 'react-redux';

class Checkout extends Component {
	componentDidMount() {
		this.props.onInitPurchase();
	}

	onCheckoutContinue = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	onCheckoutCancel = () => {
		this.props.history.goBack();
	};

	render() {
		let summary = <Redirect to='/' />;

		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? (
				<Redirect to='/' />
			) : null;
			summary = (
				<div>
					{purchasedRedirect}
					<CheckoutSummary
						ingredients={this.props.ings}
						onCheckoutContinue={this.onCheckoutContinue}
						onCheckoutCancel={this.onCheckoutCancel}
					/>
					<Route
						path={this.props.match.path + '/contact-data'}
						component={ContacData}
					/>
				</div>
			);
		}
		return summary;
	}
}
const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitPurchase: () => dispatch(actions.purchaseInit())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Checkout));
