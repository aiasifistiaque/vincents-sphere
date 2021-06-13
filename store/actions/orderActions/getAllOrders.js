import axios from 'axios';
import { api } from '../../../constants';

const getAllOrders = (sort, page) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'GET_ALL_ORDERS_REQUEST' });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.getAllOrders,
			{ sort: sort, page: page },
			config
		);

		dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'GET_ALL_ORDERS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllOrders;
