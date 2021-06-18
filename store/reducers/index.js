import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {
	getAllProductsReducer,
	getAProductReducer,
	getCategoryProductReducer,
	adminSearchProductReducer,
} from './productReducer';
import { cartReducer } from './cartReducer';
import {
	userLoginReducer,
	userSignupReducer,
	getAllUserReducer,
	getSingleUserReducer,
	emailUserReducer,
	adminSearchUserReducer,
} from './userReducer';
import {
	getAllOrdersReducer,
	getAnOrderReducer,
	adminSearchOrderReducer,
	getUserOrderReducer,
	orderSeenReducer,
} from './orderReducer';
import { favItemReducer } from './favItemReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	token: userLoginReducer,
	signup: userSignupReducer,

	//item reducers
	categoryProduct: getCategoryProductReducer,
	favItems: favItemReducer,
	getAllProducts: getAllProductsReducer,
	getAProduct: getAProductReducer,

	//user reducers
	getAllUsers: getAllUserReducer,
	singleUser: getSingleUserReducer,
	emailUser: emailUserReducer,

	//order reducers
	orderSeen: orderSeenReducer,
	userOrders: getUserOrderReducer,
	getAllOrders: getAllOrdersReducer,
	getAnOrder: getAnOrderReducer,

	//admin search
	adminSearchOrder: adminSearchOrderReducer,
	adminSearchProduct: adminSearchProductReducer,
	adminSearchUser: adminSearchUserReducer,

	// createTest: createTestReducer,
});

export default rootReducer;
