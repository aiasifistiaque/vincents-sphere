import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetSingleOrder(id, reload) {
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState({});

	useEffect(() => {
		if (id != undefined)
			axios
				.get(`${api.order}/${id}`)
				.then(function (response) {
					setOrder(response.data);
					setLoading(false);
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				})
				.then(function () {
					setLoading(false);
				});
	}, [id, reload]);

	return { order, loading };
}
