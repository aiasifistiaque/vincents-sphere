import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';

export default function useGetCategoryProducts(id) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (id != undefined)
			axios
				.get(`${api.homeproductcategories}/${id}`)
				.then(function (response) {
					setProducts(response.data);
					setLoading(false);
				})
				.catch(function (error) {
					setLoading(false);
					console.log(error.message);
				})
				.then(function () {
					setLoading(false);
				});
	}, [id]);

	return { products, loading };
}
