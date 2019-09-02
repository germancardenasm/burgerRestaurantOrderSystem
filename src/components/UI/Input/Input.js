import React from 'react';
import './Input.css';

const Input = props => {
	let inputElement;

	switch (props.inputtype) {
		case 'input':
			inputElement = (
				<input
					className='input'
					{...props.inputConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className='input'
					{...props.inputConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className='select'
					value={props.value}
					onChange={props.change}
				>
					{props.inputConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className='input'
					{...props.inputConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
	}

	return (
		<div className='input-element'>
			<label className='input-label'>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
