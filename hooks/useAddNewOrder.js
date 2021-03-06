import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../constants';
import useGetCart from './useGetCart';

const useAddNewOrder = (submit, address, paymentMethod) => {
	const [orderLoading, setLoading] = useState(true);
	const { totalPrice } = useGetCart();
	const [success, setSuccess] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [error, setError] = useState(false);
	const [id, setId] = useState();

	useEffect(() => {
		setLoading(true);

		const items = JSON.parse(localStorage.getItem('vincentcart'));
		const token = JSON.parse(localStorage.getItem('vincenttoken'));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		if (submit == true) {
			setError(false);
			setSuccess(false);

			axios
				.post(
					api.order,
					{
						orderItems: items,
						shippingAddress: address,
						paymentMethod: 'cash',
						itemPrice: totalPrice,
						vat: 0,
						shippingPrice: 0,
						totalPrice: totalPrice,
					},
					config
				)
				.then(res => {
					if (paymentMethod == 'card') {
						axios
							.post(
								api.payment,
								{
									totalPrice: totalPrice,
									transactionId: res.data._id,
									address: res.data.shippingAddress.address,
									city: res.data.shippingAddress.city,
									postalCode: res.data.shippingAddress.postalCode,
								},
								config
							)
							.then(res => {
								console.log('card payment', res.data);
								window.location.href = res.data.GatewayPageURL;
								//Router.push(res.data.GatewayPageURL);
								//setSuccess(true);
								setError(false);
								setLoading(false);
							})
							.catch(e => {
								console.log('card payment failed');
								setLoading(false);
								setSuccess(false);
								setError(true);
								setErrorMsg('there was an error try again');
								console.log(e);
							});
					}
					if (paymentMethod == 'cash') {
						setId(res.data._id);
						setSuccess(true);
						setError(false);
						setLoading(false);
					}
				})
				.catch(e => {
					setLoading(false);
					setSuccess(false);
					setError(true);
					setErrorMsg('there was an error try again');
				})
				.then(() => {});
		} else {
			setLoading(false);
		}
	}, [submit]);

	return { id, orderLoading, success, error, errorMsg };
};

const payWithSsl = (res, config) => {
	axios
		.post(api.payment, {}, config)
		.then(res => console.log('asd'))
		.catch(e => console.log(e));
};

export default useAddNewOrder;
