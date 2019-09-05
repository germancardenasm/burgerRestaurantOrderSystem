import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/actionIndex';
import Order from '../../components/Order/Order';
import axios from '../../order-axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	componentDidMount() {
		this.props.getOrders();
	}

	render() {
		let orders = <Spinner></Spinner>;
		if (!this.props.loadingOrders) {
			orders = this.props.ordersData.map(order => (
				<Order key={order.id} {...order}></Order>
			));
		}
		return <div>{orders}</div>;
	}
}

const mapStateToProps = state => {
	return {
		ordersData: state.order.orders,
		loadingOrders: state.order.loadingOrders
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getOrders: () => dispatch(actions.getOrders())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Orders, axios));
