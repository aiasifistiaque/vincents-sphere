//

import { api } from '../../../constants';
import axios from 'axios';

const getSingleUserAction = id => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'ADMIN_SEARCH_USER_REQUEST' });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(api.anUser, { id: id }, config);

		dispatch({ type: 'ADMIN_SEARCH_USER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'ADMIN_SEARCH_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getSingleUserAction;
