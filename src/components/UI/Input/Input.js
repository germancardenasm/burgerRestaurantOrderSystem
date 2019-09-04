import React from 'react';
import './Input.css';

const Input = props => {
	let inputElement;

	let inputClass = 'input';
	if (props.invalid && props.shouldValidate && props.touched)
		inputClass += ' invalid';
	switch (props.inputtype) {
		case 'input':
			inputElement = (
				<input
					className={inputClass}
					{...props.inputConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'textarea':
			inputElement = (
				<textarea
					className={inputClass}
					{...props.inputConfig}
					value={props.value}
					onChange={props.change}
				/>
			);
			break;
		case 'select':
			inputElement = (
				<select
					className={inputClass}
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
					className={inputClass}
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
