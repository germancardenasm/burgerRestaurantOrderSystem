import React from 'react';
import Logo from '../../UI/Logo/Logo';
import './Sidedrawer.css';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Sidedrawer = props => {
	return (
		<div>
			<Backdrop show={props.show} close={props.toogle} />
			<div
				className={['sidedrawer', props.show ? 'open' : 'close'].join(
					' '
				)}
			>
				<div className='logo_container'>
					<Logo />
				</div>
				<NavItems />
			</div>
		</div>
	);
};

export default Sidedrawer;
