import axios from 'axios';
import { api } from '../../../constants';

const getCategoryProduct = (id, page) => async dispatch => {
	try {
		dispatch({ type: 'GET_CATEGORY_PRODUCT_REQUEST' });
		const { data } = await axios.post(
			`${api.productcategories}/${id}`,
			{ page: page },
			api.config
		);

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
