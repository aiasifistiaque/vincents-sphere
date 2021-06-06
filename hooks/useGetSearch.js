import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetSearch(string, pressed) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState({});
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		if (pressed) {
			axios
				.post(`${api.search}`, { body: { searchString: string } }, config)
				.then(function (response) {
					setProducts(response.data);
					setLoading(false);
					setPressed(false);
				})
				.catch(function (error) {
					setLoading(false);
					setPressed(false);
				})
				.then(function () {
					setLoading(false);
					setPressed(false);
				});
		}
	}, [pressed]);

	return { products, loading };
}
