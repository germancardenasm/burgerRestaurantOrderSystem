import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContacData from './ContactData/ContacData';
import * as actionTypes from '../../Store/actions/actionsTypes';
import { connect } from 'react-redux';

class Checkout extends Component {
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
}
const mapStateToProps = state => {
	return {
		ings: state.ingredients
	};
};

export default connect(mapStateToProps)(withRouter(Checkout));
