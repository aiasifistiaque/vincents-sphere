//

import { api } from '../../../constants';
import axios from 'axios';
import { resetFav } from '../cartActions/cartActions';

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

		const conf = {
			headers: {
				'Content-Type': 'application/json',
				authorization: data,
			},
		};

		document.location.href = redirect;
		dispatch(resetFav(data));
	} catch (error) {
		dispatch({
			type: 'USER_LOGIN_FAIL',
			payload:
				error.response && error.response.data
					? error.response.data
					: error.message,
		});
	}
};

export default userLoginAction;
