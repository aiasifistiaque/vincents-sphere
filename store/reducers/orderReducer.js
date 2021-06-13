//

export const getAllOrdersReducer = (
	state = { orders: [], count: 0 },
	action
) => {
	switch (action.type) {
		case 'GET_ALL_ORDERS_REQUEST':
			return { loading: true, orders: [], count: 0 };
		case 'GET_ALL_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload.orders,
				count: action.payload.count,
			};
		case 'GET_ALL_ORDERS_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getUserOrderReducer = (
	state = { orders: [], count: 0 },
	action
) => {
	switch (action.type) {
		case 'USER_ORDERS_REQUEST':
			return { loading: true, orders: [], count: 0 };
		case 'USER_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload.orders,
				count: action.payload.count,
			};
		case 'USER_ORDERS_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getAnOrderReducer = (state = { order: {} }, action) => {
	switch (action.type) {
		case 'GET_AN_ORDER_REQUEST':
			return { loading: true, order: {} };
		case 'GET_AN_ORDER_SUCCESS':
			return { loading: false, order: action.payload };
		case 'GET_AN_ORDER_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminSearchOrderReducer = (state = { order: {} }, action) => {
	switch (action.type) {
		case 'ADMIN_SEARCH_ORDER_REQUEST':
			return { loading: true, order: {} };
		case 'ADMIN_SEARCH_ORDER_SUCCESS':
			return { loading: false, order: action.payload };
		case 'ADMIN_SEARCH_ORDER_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
