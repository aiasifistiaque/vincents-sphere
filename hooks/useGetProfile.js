import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../constants';

const useGetProfile = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState([]);

	useEffect(() => {
		setLoading(true);
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		axios
			.post(`${api.profile}`, { body: '' }, config)
			.then(function (response) {
				setUser(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, []);
	return { user, loading };
};

export default useGetProfile;
