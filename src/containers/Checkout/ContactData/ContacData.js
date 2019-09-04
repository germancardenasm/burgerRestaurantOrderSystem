import React, { Component } from 'react';
import * as actions from '../../../Store/actions/actionIndex';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { orderForm } from './orderForm';
import { connect } from 'react-redux';
import './ContactData.css';
class ContacData extends Component {
	state = {
		orderForm: orderForm,
		formIsValid: false
	};

	orderHandler = e => {
		e.preventDefault();

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
		this.props.onOrderBurger(order);
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

		if (this.props.loading) {
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
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.price,
		loading: state.order.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onOrderBurger: orderData => {
			dispatch(actions.puchaseBurger(orderData));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ContacData);
