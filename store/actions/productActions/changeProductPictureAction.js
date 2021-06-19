//
import axios from 'axios';
import { api, backendFile } from '../../../constants';

const changeProductPictureAction = (id, image) => async dispatch => {
	const token = JSON.parse(localStorage.getItem('vincenttoken'));

	try {
		dispatch({ type: 'GET_A_PRODUCT_REQUEST' });
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		const file = image.target.files[0];
		const formData = new FormData();
		formData.append('image', file);

		const img = await axios.post(api.upload, formData, api.fileConfig);

		const { data } = await axios.post(
			api.changeProductPicture,
			{ id: id, image: `${backendFile}${img.data}` },
			config
		);
		console.log('data', data);
		dispatch({
			type: 'GET_A_PRODUCT_SUCCESS',
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: 'GET_A_PRODUCT_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export default changeProductPictureAction;
