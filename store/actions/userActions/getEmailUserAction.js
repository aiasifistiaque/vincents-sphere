//

import { api } from '../../../constants';
import axios from 'axios';

const getEmailUserAction = email => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'EMAIL_USER_REQUEST' });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const { data } = await axios.post(api.userByMail, { email: email }, config);

		dispatch({ type: 'EMAIL_USER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'EMAIL_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default getEmailUserAction;
