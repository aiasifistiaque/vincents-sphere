import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { getAllProductsReducer, getAProductReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { userLoginReducer, userSignupReducer } from './userReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	getAllProducts: getAllProductsReducer,
	getAProduct: getAProductReducer,
	cart: cartReducer,
	token: userLoginReducer,
	signup: userSignupReducer,
	// createTest: createTestReducer,
});

export default rootReducer;
