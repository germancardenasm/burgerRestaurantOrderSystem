import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../order-axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};
	componentDidMount() {
		axios
			.get('/orders.json')
			.then(response => {
				console.log('Orders', response.data);
				const ordersData = [];
				for (let key in response.data) {
					ordersData.push({ ...response.data[key], id: key });
				}
				console.log('data', ordersData);
				this.setState({ loading: false, orders: ordersData });
			})
			.catch(this.setState({ loading: false }));
	}

	render() {
		let orders = this.state.orders.map(order => (
			<Order key={order.id} {...order}></Order>
		));
		if (this.state.loading) {
			orders = <Spinner></Spinner>;
		}
		return <div>{orders}</div>;
	}
}

export default withErrorHandler(Orders, axios);
