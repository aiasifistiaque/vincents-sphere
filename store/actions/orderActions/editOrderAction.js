import axios from 'axios';
import { api } from '../../../constants';

const getAnOrder = (order, value, paid) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'EDIT_ORDER_REQUEST' });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.put(
			api.order,
			{
				id: order._id,
				status: value || order.status,
				paid: paid || order.isPaid,
			},
			config
		);

		dispatch({ type: 'EDIT_ORDER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'EDIT_ORDER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAnOrder;
