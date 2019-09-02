import React, { Component } from 'react';
import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContacData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			zip: ''
		},
		loading: false
	};

	orderHandler = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'German',
				address: {
					street: 'Street Colombia',
					zip: '12345',
					city: 'Envigado'
				},
				email: 'myemail@mail.com'
			}
		};
		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({
					loading: false
				});
				this.props.history.push('/');
			})
			.catch(error =>
				this.setState({
					loading: false
				})
			);
	};

	render() {
		let form = (
			<form>
				<input type='text' name='name' placeholder='Enter your name' />
				<input
					type='text'
					name='email'
					placeholder='Enter your email'
				/>
				<input
					type='text'
					name='street'
					placeholder='Enter your address'
				/>
				<input
					type='text'
					name='zip-code'
					placeholder='Enter your zip code'
				/>
				<Button type='success' click={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);

		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className='contact-data'>
				<h4>Enter contact data!</h4>
				{form}
			</div>
		);
	}
}

export default ContacData;
