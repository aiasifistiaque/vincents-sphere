import axios from 'axios';
import { api } from '../../../constants';

const getAllProducts = () => async dispatch => {
	try {
		dispatch({ type: 'GET_ALL_PRODUCTS_REQUEST' });
		const { data } = await axios.get(api.products);

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
