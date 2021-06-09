import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {
	getAllProductsReducer,
	getAProductReducer,
	getCategoryProductReducer,
} from './productReducer';
import { cartReducer } from './cartReducer';
import {
	userLoginReducer,
	userSignupReducer,
	getAllUserReducer,
} from './userReducer';
import { getAllOrdersReducer, getAnOrderReducer } from './orderReducer';
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
	// createTest: createTestReducer,
});

export default rootReducer;
