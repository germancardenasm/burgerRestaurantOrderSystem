import React, { Component } from 'react';
import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContacData extends Component {
	state = {
		orderForm: {
			name: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Name'
				},
				value: ''
			},
			street: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Address'
				},
				value: ''
			},
			zip: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Zip Code'
				},
				value: ''
			},
			city: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your City'
				},
				value: ''
			},
			email: {
				inputtype: 'input',
				inputConfig: {
					type: 'email',
					placeholder: 'Enter Your Email'
				},
				value: ''
			},
			deliveryMethod: {
				inputtype: 'select',
				inputConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: 'fastest'
			}
		},
		loading: false
	};

	orderHandler = e => {
		e.preventDefault();
		this.setState({ loading: true });
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[
				formElementIdentifier
			].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
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

	inputHandler = (event, inputIdentifier) => {
		const updatedOrderForm = { ...this.state.orderForm };
		const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		this.setState({ orderForm: updatedOrderForm });
	};

	render() {
		const formInputs = [];

		for (let key in this.state.orderForm) {
			formInputs.push({
				id: key,
				setup: this.state.orderForm[key]
			});
		}

		let form = (
			<form onSubmit={this.orderHandler}>
				{formInputs.map(element => (
					<Input
						key={element.id}
						inputtype={element.setup.inputtype}
						value={element.setup.value}
						inputConfig={element.setup.inputConfig}
						change={event => this.inputHandler(event, element.id)}
					/>
				))}

				<Button type='success'>ORDER</Button>
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
