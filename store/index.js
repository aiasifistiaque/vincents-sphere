import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const ISSERVER = typeof window === 'undefined';

const cartItemsFromStorage =
	!ISSERVER && localStorage.getItem('vincentcart')
		? JSON.parse(localStorage.getItem('vincentcart'))
		: [];

const tokenFromStorage =
	!ISSERVER && localStorage.getItem('vincenttoken')
		? JSON.parse(localStorage.getItem('vincenttoken'))
		: null;

const favItemsFromStorage =
	!ISSERVER && localStorage.getItem('vincentfav')
		? JSON.parse(localStorage.getItem('vincentfav'))
		: [];

console.log(favItemsFromStorage);

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
	token: tokenFromStorage,
	favItems: { favItems: favItemsFromStorage },
};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
