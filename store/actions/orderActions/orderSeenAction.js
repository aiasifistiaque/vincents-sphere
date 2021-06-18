import axios from 'axios';
import { api } from '../../../constants';

const orderSeenAction = id => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'ORDER_SEEN_REQUEST' });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.put(
			api.changeSeen,
			{
				id: id,
				seen: 1,
			},
			config
		);

		dispatch({ type: 'ORDER_SEEN_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'ORDER_SEEN_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default orderSeenAction;
