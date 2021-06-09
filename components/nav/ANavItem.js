import React from 'react';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const ANavItem = ({ children, href, logout }) => {
	const dispatch = useDispatch();
	if (logout)
		return (
			<div className='a-navitem' onClick={() => dispatch(logoutAction())}>
				{children}
			</div>
		);
	return (
		<Link href={href}>
			<Nav.Link
				href={href || '#'}
				className='a-navitem'
				style={{ color: 'black' }}>
				{children}
			</Nav.Link>
		</Link>
	);
};

export default ANavItem;
