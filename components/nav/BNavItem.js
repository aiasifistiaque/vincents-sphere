import React from 'react';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const BNavItem = ({ children, href, logout }) => {
	const dispatch = useDispatch();
	if (logout)
		return (
			<div className='v-navitem' onClick={() => dispatch(logoutAction())}>
				{children}
			</div>
		);
	return (
		<Link href={href}>
			<Nav.Link
				href={href || '#'}
				className='v-navitem'
				style={{ color: 'whitesmoke' }}>
				{children}
			</Nav.Link>
		</Link>
	);
};

export default BNavItem;
