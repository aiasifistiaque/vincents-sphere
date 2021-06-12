import React from 'react';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BNavItem = ({ children, href, logout }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	if (logout)
		return (
			<div className='v-navitem' onClick={() => dispatch(logoutAction())}>
				{children}
			</div>
		);
	return (
		<Nav.Link
			onClick={() => router.push(href)}
			href={href || '#'}
			className='v-navitem'
			style={{ color: 'whitesmoke' }}>
			{children}
		</Nav.Link>
	);
};

export default BNavItem;
