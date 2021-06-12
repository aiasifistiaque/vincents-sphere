//

import { api } from '../../../constants';
import axios from 'axios';

const editUserRoleAction = (id, role) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'SINGLE_USER_REQUEST' });

		const config = {
			headers: { 'Content-Type': 'application/json', authorization: token },
		};

		const edit = await axios.post(api.editRole, { id: id, role: role }, config);

		const { data } = await axios.post(
			api.anUser,
			{ id: id, edit: edit },
			config
		);

		if (edit) dispatch({ type: 'SINGLE_USER_SUCCESS', payload: data });
	} catch (error) {
		dispatch({
			type: 'SINGLE_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default editUserRoleAction;
