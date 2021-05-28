//

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_ORDERS_REQUEST':
			return { loading: true, orders: [] };
		case 'GET_ALL_ORDERS_SUCCESS':
			return { loading: false, orders: action.payload };
		case 'GET_ALL_ORDERS_FAIL':
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
