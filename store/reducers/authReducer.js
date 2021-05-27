const initialState = { token: '', loggedIn: false };

const practiceScoreReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			state.token = action.payload.token;
			state.loggedIn = true;
			return state;
		case 'LOG_OUT':
			state.token = '';
			state.loggedIn = false;
			return state;
		default:
			return state;
	}
};

export default practiceScoreReducer;
