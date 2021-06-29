//

export const backend = 'https://vincent-backend.herokuapp.com/api';
export const backendFile = 'https://api-vincentsphere.herokuapp.com';

export const production = 'https://api-vincentsphere.herokuapp.com/api';

export const dev = 'http://localhost:5000/api';
const domain = '';
const frontDev = 'https://vincents-sphere.vercel.app/';

export const frontend = frontDev;
const server = production;

export const sizes = {
	displayCard: {
		width: 300,
		height: 350,
	},
};

export const categories = [
	{
		name: 'Scented Candles',
		target: 'Candles',
		title: 'Handcrafted Scented Candles',
		subtitle: 'With over hundreds of fragrances to choose from',
	},
	{
		name: 'Bath Salts',
		target: 'Bathsalt',
		title: 'Aromatherapy Bath Salts',
		subtitle: 'To soothe your mind, body & spirit',
	},

	{
		name: 'Satin Masks',
		target: 'Satin Mask',
		title: 'Satin Masks',
		subtitle: 'To keep your hair healthy, silky & smooth',
	},
	{
		name: 'Satin Scrunchies',
		target: 'Satin Scrunchie',
		title: 'Satin Scrunchies',
		subtitle: 'To keep your hair healthy, silky & smooth',
	},
	{
		name: 'Dream Catchers',
		target: 'Dream Catcher',
		title: 'Dream Catchers',
		subtitle: 'For a night of healthy sleep',
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

	//change product picture
	changeProductPicture: `${server}/products/changepicture`,

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

	//review route
	review: `${server}/review`,
	addWish: `${server}/review/addtowishlist`,
	deleteWish: `${server}/review/deletefromwishlist`,
	getWish: `${server}/review/getwishlist`,

	config: {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	},
	fileConfig: {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	},
};

export const general = {
	takaSymbol: '৳',
};

export const colors = {
	pink: '#fb3290',
};
