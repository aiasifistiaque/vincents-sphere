import axios from 'axios';
import { api } from '../../../constants';

const adminSearchProductAction = id => async dispatch => {
	try {
		dispatch({ type: 'ADMIN_SEARCH_PRODUCT_REQUEST' });
		const { data } = await axios.get(`${api.products}/${id}`);

		dispatch({ type: 'ADMIN_SEARCH_PRODUCT_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'ADMIN_SEARCH_PRODUCT_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default adminSearchProductAction;
