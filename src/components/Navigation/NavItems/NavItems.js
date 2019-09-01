import React from 'react';
import Aux from '../../../hoc/Aux';
import NavItem from './NavItem/NavItem';
import './NavItems.css';

const NavItems = () => (
	<ul className='nav_items'>
		<NavItem link='/' active>
			Burger Builder
		</NavItem>
		<NavItem link='/Checkout'>Checkout</NavItem>
	</ul>
);

export default NavItems;
