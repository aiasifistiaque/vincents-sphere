//

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case 'USER_LOGIN_REQUEST':
			return { loading: true };
		case 'USER_LOGIN_SUCCESS':
			return { loading: false, token: action.payload };
		case 'USER_LOGIN_FAIL':
			return { loading: false, error: action.payload };
		case 'USER_LOGOUT':
			return {};
		default:
			return { loading: false };
	}
};

export const userSignupReducer = (state = {}, action) => {
	switch (action.type) {
		case 'USER_REGISTER_REQUEST':
			return { loading: true };
		case 'USER_REGISTER_SUCCESS':
			return { loading: false };
		case 'USER_REGISTER_FAIL':
			return { loading: false, error: action.payload };

		default:
			return { loading: false };
	}
};

export const getAllUserReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case 'ALL_USER_REQUEST':
			return { loading: true, users: [] };
		case 'ALL_USER_SUCCESS':
			return { loading: false, users: action.payload };
		case 'ALL_USER_FAIL':
			return { loading: false, users: action.payload };

		default:
			return state;
	}
};

export const getSingleUserReducer = (
	state = { user: {}, orders: [], role: '' },
	action
) => {
	switch (action.type) {
		case 'SINGLE_USER_REQUEST':
			return { loading: true, user: {}, orders: [], role: '' };
		case 'SINGLE_USER_SUCCESS':
			return {
				loading: false,
				user: action.payload.user,
				orders: action.payload.orders,
				role: action.payload.user.role,
			};
		case 'SINGLE_USER_FAIL':
			return { loading: false, user: {}, orders: [], role: '' };

		default:
			return state;
	}
};
