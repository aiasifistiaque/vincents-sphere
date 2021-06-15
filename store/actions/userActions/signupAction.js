//

import userLoginAction from './userLoginAction';
import { api } from '../../../constants';
import axios from 'axios';

const signupAction = (name, email, password) => async dispatch => {
	try {
		dispatch({
			type: 'USER_REGISTER_REQUEST',
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			api.register,
			{ name, email, password },
			api.config
		);

		dispatch({
			type: 'USER_REGISTER_SUCCESS',
		});

		dispatch(userLoginAction(email, password, '/'));

		//localStorage.setItem('token', JSON.stringify(token));
	} catch (error) {
		dispatch({
			type: 'USER_REGISTER_FAIL',
			payload:
				error.response && error.response.data
					? error.response.data
					: error.message,
		});
	}
};

export default signupAction;
