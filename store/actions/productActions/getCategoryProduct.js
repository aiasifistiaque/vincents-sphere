import axios from 'axios';
import { api } from '../../../constants';

const getCategoryProduct = id => async dispatch => {
	try {
		dispatch({ type: 'GET_CATEGORY_PRODUCT_REQUEST' });
		const { data } = await axios.get(`${api.productcategories}/${id}`);

		dispatch({ type: 'GET_CATEGORY_PRODUCT_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'GET_CATEGORY_PRODUCT_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getCategoryProduct;
