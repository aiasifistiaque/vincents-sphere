import React from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import NavItem from './NavItem';
import { useDispatch } from 'react-redux';
import logoutAction from '../../store/actions/userActions/userLogoutAction';

const NavLogged = () => {
	const { loading, isLoggedIn } = useIsLoggedIn();

	const logout = () => {
		localStorage.removeItem('token');
	};
	const dispatch = useDispatch();

	if (loading) return null;

	if (isLoggedIn)
		return (
			<>
				<div>
					<NavItem href='/profile'>Profile</NavItem>
				</div>

				<div className='nav-item' onClick={() => dispatch(logoutAction())}>
					<p>logout</p>
				</div>
			</>
		);
	else
		return (
			<>
				<NavItem href='/login'>Log In</NavItem>
				<NavItem href='/signup'>Register</NavItem>
			</>
		);
};

export default NavLogged;
