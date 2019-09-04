export const orderForm = {
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
};
