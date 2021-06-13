//

import { api } from '../../../constants';
import axios from 'axios';

const getAllUserAction = (sort, page) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'ALL_USER_REQUEST' });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(
			api.allusers,
			{ body: '', sort: sort, page: page },
			config
		);

		dispatch({ type: 'ALL_USER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'ALL_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getAllUserAction;
