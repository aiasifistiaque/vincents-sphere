import axios from 'axios';
import { api } from '../../../constants';

const getAnOrder = id => async dispatch => {
	try {
		dispatch({ type: 'GET_AN_ORDER_REQUEST' });
		const { data } = await axios.get(`${api.order}/${id}`);

		dispatch({ type: 'GET_AN_ORDER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'GET_AN_ORDER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAnOrder;
