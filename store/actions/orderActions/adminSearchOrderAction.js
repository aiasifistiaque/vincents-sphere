import axios from 'axios';
import { api } from '../../../constants';

const adminSearchOrderAction = id => async dispatch => {
	try {
		dispatch({ type: 'ADMIN_SEARCH_ORDER_REQUEST' });
		const { data } = await axios.get(`${api.order}/${id}`);

		dispatch({ type: 'ADMIN_SEARCH_ORDER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'ADMIN_SEARCH_ORDER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default adminSearchOrderAction;
