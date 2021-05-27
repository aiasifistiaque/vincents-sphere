export const increment = x => {
	return {
		type: 'INCREMENT',
		payload: x,
	};
};

export const loginAction = token => async dispatch => {
	dispatch({
		type: 'LOG_IN',
		payload: {
			token,
		},
	});
};
