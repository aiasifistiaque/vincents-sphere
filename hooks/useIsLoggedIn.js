import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetFav } from '../store/actions/cartActions/cartActions';

const useIsLoggedIn = () => {
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [authToken, setAuthToken] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('vincenttoken'));
		const items = JSON.parse(localStorage.getItem('vincentfav'));

		if (token != null) {
			setAuthToken(() => token);
			setIsLoggedIn(() => true);
		} else {
			setIsLoggedIn(() => false);
		}
		setLoading(() => false);
	}, []);

	return { loading, isLoggedIn, token: authToken };
};

export default useIsLoggedIn;
