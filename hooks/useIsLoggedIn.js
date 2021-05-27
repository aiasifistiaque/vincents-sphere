import React, { useEffect, useState } from 'react';

const useIsLoggedIn = () => {
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [authToken, setAuthToken] = useState('');

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

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
