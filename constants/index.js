//

export const backend = 'https://vincent-backend.herokuapp.com/api';
export const backendFile = 'https://vincent-backend.herokuapp.com';

export const dev = 'http://localhost:5000/api';
const domain = '';
const frontDev = 'https://vincents-sphere.vercel.app/';

export const frontend = frontDev;
const server = backend;

export const sizes = {
	displayCard: {
		width: 300,
		height: 350,
	},
};

export const categories = [
	{
		name: 'Candles',
		title: 'Handicrafted Scented Candles',
		subtitle: 'With over hundreds of candles to choose from',
	},
	{
		name: 'Bathsalt',
		title: 'Aroma Therapy Bath Salts',
		subtitle: 'To soothe your mind, body & spirit',
	},

	{
		name: 'Satin Mask',
		title: 'Satin Mask',
		subtitle: 'To keep your hair healthy, silky & smooth',
	},
	{
		name: 'Satin Scrunchie',
		title: 'Satin Scrunchies',
		subtitle: 'To keep your hair healthy, silky & smooth',
	},
	{
		name: 'Dream Catcher',
		title: 'Dream Catcher',
		subtitle: 'For a healthy sleep',
	},
];

export const api = {
	homeproductcategories: `${server}/categories/homecat`,
	productcategories: `${server}/categories/cat`,
	products: `${server}/products`,
	search: `${server}/search`,
	login: `${server}/login`,
	register: `${server}/register`,
	order: `${server}/order`,
	userorder: `${server}/order/userorder`,

	allusers: `${server}/profile/getallusers`,
	profile: `${server}/profile`,
	anUser: `${server}/profile/getanuser`,
	userByMail: `${server}/profile/getuserbymail`,
	editRole: `${server}/profile/editrole`,
	editUser: `${server}/profile/edituser`,
	sendOtp: `${server}/profile/sendotp`,
	verifyOtp: `${server}/profile/verifyotp`,
	resetPassword: `${server}/profile/resetpassword`,
	changePassword: `${server}/profile/changePassword`,

	getAllUsers: `${server}/profile/getallusers`,
	createProduct: `${server}/products/createproduct`,
	getAllOrders: `${server}/order/getallorders`,
	changeSeen: `${server}/order/changeSeen`,
	payment: `${server}/payment`,
	explore: `${server}/explore`,
	dashboard: `${server}/dashboard`,
	upload: `${server}/upload`,

	review: `${server}/review`,

	config: {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	},
};

export const general = {
	takaSymbol: '৳',
};
