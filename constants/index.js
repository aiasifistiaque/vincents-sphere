//

export const backend = 'https://vincent-backend.herokuapp.com/api';
export const dev = 'http://localhost:5000/api';

const server = backend;

export const sizes = {
	displayCard: {
		width: 300,
		height: 350,
	},
};

export const categories = [
	'Bathsalt',
	'Candles',
	'Dream Catcher',
	'Satin Mask ',
	'Satin Scrunchie',
];

export const api = {
	productByCategory: `${server}/categories/cat`,
	products: `${server}/products`,
	login: `${server}/login`,
	register: `${server}/register`,
	order: `${server}/order`,
	userorder: `${server}/order/userorder`,
	profile: `${server}/profile`,
	getAllUsers: `${server}/profile/getallusers`,
	createProduct: `${server}/products/createproduct`,
	getAllOrders: `${server}/order/getallorders`,
	payment: `${server}/payment`,
	config: {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	},
};
