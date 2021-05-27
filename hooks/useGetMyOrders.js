import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../constants';

const useGetMyOrders = () => {
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);

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
			.post(`${api.userorder}`, { body: '' }, config)
			.then(function (response) {
				setOrders(response.data);
				console.log('res', response.data);
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
	return { orders, loading };
};

export default useGetMyOrders;
