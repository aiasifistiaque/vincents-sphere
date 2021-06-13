import axios from 'axios';
import { api } from '../../../constants';

const userOrdersAction = (select, page) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'USER_ORDERS_REQUEST' });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			api.userorder,
			{ status: select, page: page },
			config
		);

		dispatch({ type: 'USER_ORDERS_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'USER_ORDERS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default userOrdersAction;
