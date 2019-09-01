import React from 'react';
import Aux from '../../../hoc/Aux';
import NavItem from './NavItem/NavItem';
import { NavLink } from 'react-router-dom';
import './NavItems.css';

const NavItems = () => (
	<ul className='nav_items'>
		<li className='nav_item'>
			<NavLink to='/' exact>
				Burger Builder
			</NavLink>
		</li>
		<li className='nav_item'>
			<NavLink to='/checkout'>Checkout</NavLink>
		</li>
	</ul>
);

export default NavItems;
