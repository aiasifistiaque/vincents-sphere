import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetSingleOrder(id, reload) {
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		if (id != undefined)
			axios
				.get(`${api.order}/${id}`, config)
				.then(function (response) {
					setOrder(response.data);
					setLoading(false);
				})
				.catch(function (error) {
					setError(true);
					setLoading(false);
					console.log(error.message);
				})
				.then(function () {
					setLoading(false);
				});
	}, [id, reload]);

	return { order, loading, error };
}
