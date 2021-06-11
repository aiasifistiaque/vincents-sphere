//

export const getAllProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_PRODUCTS_REQUEST':
			return { loading: true, products: [] };
		case 'GET_ALL_PRODUCTS_SUCCESS':
			return { loading: false, products: action.payload };
		case 'GET_ALL_PRODUCTS_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getAProductReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case 'GET_A_PRODUCT_REQUEST':
			return { loading: true, product: {} };
		case 'GET_A_PRODUCT_SUCCESS':
			return { loading: false, product: action.payload };
		case 'GET_A_PRODUCT_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const adminSearchProductReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case 'ADMIN_SEARCH_PRODUCT_REQUEST':
			return { loading: true, product: {} };
		case 'ADMIN_SEARCH_PRODUCT_SUCCESS':
			return { loading: false, product: action.payload };
		case 'ADMIN_SEARCH_PRODUCT_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const getCategoryProductReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case 'GET_CATEGORY_PRODUCT_REQUEST':
			return { loading: true, products: [] };
		case 'GET_CATEGORY_PRODUCT_SUCCESS':
			return { loading: false, products: action.payload };
		case 'GET_CATEGORY_PRODUCT_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
