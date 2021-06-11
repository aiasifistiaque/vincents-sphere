//
import axios from 'axios';
import { api } from '../../../constants';

const createProductAction = () => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'PRODUCT_CREATE_REQUEST' });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const { data } = await axios.post(
			`/api/products/createproduct`,
			{},
			config
		);

		dispatch({
			type: 'PRODUCT_CREATE_SUCCESS',
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		if (message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'PRODUCT_CREATE_FAIL',
			payload: message,
		});
	}
};

export default createProductAction;
