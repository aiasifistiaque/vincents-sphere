import axios from 'axios';
import { api } from '../../../constants';

const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS';
const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD';

export const addToCart = (product, qty = 1) => async (dispatch, getState) => {
	//const { data } = await axios.get(`/api/products/${id}`);
	const data = product;

	dispatch({
		type: 'CART_ADD_ITEM',
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price * qty,
			itemPrice: data.price,
			countInStock: data.countInStock,
			qty,
		},
	});

	localStorage.setItem(
		'vincentcart',
		JSON.stringify(getState().cart.cartItems)
	);
};

export const removeFromCart = id => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem(
		'vincentcart',
		JSON.stringify(getState().cart.cartItems)
	);
};

export const emptyCart = id => (dispatch, getState) => {
	dispatch({
		type: 'CART_CLEAR_ITEMS',
		payload: id,
	});

	localStorage.setItem('vincentcart', JSON.stringify([]));
};

export const saveShippingAddress = data => dispatch => {
	dispatch({
		type: CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('vincent_shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = data => dispatch => {
	dispatch({
		type: CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});

	localStorage.setItem('paymentMethod', JSON.stringify(data));
};

export const addToFav = product => async (dispatch, getState) => {
	//const { data } = await axios.get(`/api/products/${id}`);
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	const config = {
		headers: {
			'Content-Type': 'application/json',
			authorization: token,
		},
	};

	try {
		const { data } = await axios.post(
			`${api.addWish}/${product._id}`,
			{},
			config
		);
		dispatch({
			type: 'ADD_FAV_ITEM',
			payload: product._id,
		});
		localStorage.setItem('vincentfav', JSON.stringify(data.wishlist));
	} catch (e) {
		console.log(e);
	}
};

export const removeFromFav = product => async (dispatch, getState) => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	const config = {
		headers: {
			'Content-Type': 'application/json',
			authorization: token,
		},
	};
	try {
		const { data } = await axios.post(
			`${api.deleteWish}/${product._id}`,
			{},
			config
		);
		dispatch({
			type: 'REMOVE_FAV_ITEM',
			payload: product._id,
		});
		localStorage.setItem('vincentfav', JSON.stringify(data.wishlist));
	} catch (e) {
		console.log(e);
	}
};

export const resetFav = token => async (dispatch, getState) => {
	//const token = JSON.parse(localStorage.getItem('vincenttoken'));

	const config = {
		headers: { 'Content-Type': 'application/json', authorization: token },
	};
	try {
		const { data } = await axios.get(api.getWish, config);

		dispatch({
			type: 'RESET_FAV_ITEM',
			payload: data.wishlist,
		});
		localStorage.setItem('vincentfav', JSON.stringify(data.wishlist));
	} catch (e) {
		console.log(e);
	}
};
