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
} from './orderReducer';
import { favItemReducer } from './favItemReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	getAllProducts: getAllProductsReducer,
	getAProduct: getAProductReducer,
	cart: cartReducer,
	token: userLoginReducer,
	signup: userSignupReducer,
	getAllOrders: getAllOrdersReducer,
	getAnOrder: getAnOrderReducer,
	categoryProduct: getCategoryProductReducer,
	favItems: favItemReducer,
	getAllUsers: getAllUserReducer,
	singleUser: getSingleUserReducer,
	emailUser: emailUserReducer,

	//admin search
	adminSearchOrder: adminSearchOrderReducer,
	adminSearchProduct: adminSearchProductReducer,
	adminSearchUser: adminSearchUserReducer,

	// createTest: createTestReducer,
});

export default rootReducer;
