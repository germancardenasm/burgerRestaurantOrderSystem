import React, { Component } from 'react';
import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';

class ContacData extends Component {
	state = {
		orderForm: {
			name: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			street: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Address'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			zip: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your Zip Code'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: false,
				touched: false
			},
			city: {
				inputtype: 'input',
				inputConfig: {
					type: 'text',
					placeholder: 'Enter Your City'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				inputtype: 'input',
				inputConfig: {
					type: 'email',
					placeholder: 'Enter Your Email'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			deliveryMethod: {
				inputtype: 'select',
				inputConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: 'fastest',
				validation: {},
				valid: true
			}
		},
		formIsValid: false,
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
			ingredients: this.props.ings,
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

	checkValidity = (value, rules) => {
		let isValid = true;

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		return isValid;
	};

	inputHandler = (event, inputIdentifier) => {
		const updatedOrderForm = { ...this.state.orderForm };
		const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
		updatedFormElement.value = event.target.value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid =
				updatedOrderForm[inputIdentifier].valid && formIsValid;
		}

		this.setState({
			orderForm: updatedOrderForm,
			formIsValid: formIsValid
		});
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
						invalid={!element.setup.valid}
						shouldValidate={element.setup.validation}
						touched={element.setup.touched}
						change={event => this.inputHandler(event, element.id)}
					/>
				))}

				<Button type='success' disabled={!this.state.formIsValid}>
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
const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.price
	};
};
export default connect(mapStateToProps)(ContacData);
