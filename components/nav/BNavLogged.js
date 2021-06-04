import React from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import NavItem from './NavItem';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const BNavLogged = () => {
	const { loading, isLoggedIn } = useIsLoggedIn();

	const logout = () => {
		localStorage.removeItem('token');
	};

	if (loading) return null;

	if (isLoggedIn)
		return (
			<>
				<BNavItem href='/profile'>Profile</BNavItem>
				<BNavItem logout>logout</BNavItem>
			</>
		);
	else
		return (
			<>
				<BNavItem href='/login'>Log In</BNavItem>
				<BNavItem href='/signup'>Register</BNavItem>
			</>
		);
};

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

export default BNavLogged;
