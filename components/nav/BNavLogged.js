import React from 'react';
import useIsLoggedIn from '../../hooks/useIsLoggedIn';
import BNavItem from './BNavItem';

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
				{
					//<BNavItem href='/signup'>Register</BNavItem>
				}
			</>
		);
};

export default BNavLogged;
