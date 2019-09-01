import React from 'react';
import './NavItem.css';

const NavItem = props => {
	return (
		<li className='nav_item'>
			<a href={props.link}>{props.children}</a>
		</li>
	);
};

export default NavItem;
