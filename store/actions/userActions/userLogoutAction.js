//

const logoutAction = () => dispatch => {
	localStorage.removeItem('vincenttoken');
	localStorage.setItem('vincentcart', JSON.stringify([]));

	dispatch({ type: 'USER_LOGOUT' });

	document.location.href = '/login';
};

export default logoutAction;
