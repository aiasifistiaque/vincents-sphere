import axios from 'axios';
import { api } from '../../../constants';

const getAllProducts = sort => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'GET_ALL_PRODUCTS_REQUEST' });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.products,
			{ sort: (sort && sort) || '' },
			config
		);

		dispatch({ type: 'GET_ALL_PRODUCTS_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'GET_ALL_PRODUCTS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllProducts;
