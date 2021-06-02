import React from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import NavItem from './NavItem';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';
import { Nav } from 'react-bootstrap';

const BNavLogged = () => {
	const { loading, isLoggedIn } = useIsLoggedIn();

	const logout = () => {
		localStorage.removeItem('token');
	};
	const dispatch = useDispatch();

	if (loading) return null;

	if (isLoggedIn)
		return (
			<>
				<Nav.Link href='/profile'>Profile</Nav.Link>
				<Nav.Link href='#' onClick={() => dispatch(logoutAction())}>
					logout
				</Nav.Link>
			</>
		);
	else
		return (
			<>
				<Nav.Link href='/login'>Log In</Nav.Link>
				<Nav.Link href='/signup'>Register</Nav.Link>
			</>
		);
};

export default BNavLogged;
