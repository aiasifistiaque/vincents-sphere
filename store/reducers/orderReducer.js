//

export const getAllOrdersReducer = (
	state = { orders: [], count: 0, loading: true },
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
	state = { orders: [], count: 0, loading: true },
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

export const getAnOrderReducer = (
	state = { order: {}, loading: true },
	action
) => {
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

export const adminSearchOrderReducer = (
	state = { order: {}, loading: true },
	action
) => {
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

/*change seen status when 
admin opens an order*/
export const orderSeenReducer = (
	state = { seen: false, loading: true },
	action
) => {
	switch (action.type) {
		case 'ORDER_SEEN_REQUEST':
			return { loading: true, seen: 2 };
		case 'ORDER_SEEN_SUCCESS':
			return { loading: false, seen: 1 };
		case 'ORDER_SEEN_FAIL':
			return { loading: false, error: action.payload, seen: 2 };

		default:
			return state;
	}
};

/*order being edited
by admin*/
export const editOrderReducer = (
	state = { edit: false, loading: false },
	action
) => {
	switch (action.type) {
		case 'EDIT_ORDER_REQUEST':
			return { loading: true, edit: true, order: {} };
		case 'EDIT_ORDER_SUCCESS':
			return { loading: false, edit: false, order: action.payload };
		case 'EDIT_ORDER_FAIL':
			return { loading: false, error: action.payload, edit: false };

		default:
			return state;
	}
};
