import React from 'react';
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
			<NavLink to='/orders'>Orders</NavLink>
		</li>
	</ul>
);

export default NavItems;
