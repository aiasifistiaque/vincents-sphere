//

import { api } from '../../../constants';
import axios from 'axios';

const userLoginAction = (email, password, redirect) => async dispatch => {
	try {
		dispatch({
			type: 'USER_LOGIN_REQUEST',
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(api.login, { email, password }, config);

		dispatch({
			type: 'USER_LOGIN_SUCCESS',
			payload: data,
		});

		localStorage.setItem('vincenttoken', JSON.stringify(data));

		document.location.href = '/';
	} catch (error) {
		dispatch({
			type: 'USER_LOGIN_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default userLoginAction;
