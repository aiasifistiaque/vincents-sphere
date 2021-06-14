import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Loading from '../components/Loading';
import Router from 'next/router';
import useAddNewOrder from '../hooks/useAddNewOrder';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/actions/cartActions/cartActions';

const checkout = () => {
	const dispatch = useDispatch();
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [postCode, setPostCode] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('cash');
	const [submit, setSubmit] = useState(false);

	const { loading, isLoggedIn } = useIsLoggedIn();
	const { id, orderLoading, success, error, errorMsg } = useAddNewOrder(
		submit,
		{ address: address, city: city, postalCode: postCode, phone: phone },
		paymentMethod
	);

	useEffect(() => {
		if (!isLoggedIn && !loading) Router.push('/login?page=cart');
	}, [loading]);

	useEffect(() => {
		//setLoading(true);
		if (!orderLoading) setSubmit(false);
		if (success) {
			//localStorage.setItem('vincentcart', JSON.stringify([]));
			dispatch(emptyCart());
			Router.replace(`/order/${id}?status=new`);
		} else {
			//setLoading(false);
		}
	}, [orderLoading, success]);

	if (loading) return <Loading />;

	if (!isLoggedIn) return <Loading />;

	return (
		<Page>
			<div className='login-page'>
				<div className='login-form'>
					<h3>Shipping</h3>
					<label>Address</label>
					<input
						type='text'
						placeholder='address'
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
					<label>City</label>
					<input
						type='text'
						placeholder='city'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
					<label>Phone Number</label>
					<input
						type='number'
						placeholder='phone'
						value={phone}
						onChange={e => setPhone(e.target.value)}
						required
					/>
					<label>Post Code</label>
					<input
						type='text'
						placeholder='post code'
						value={postCode}
						onChange={e => setPostCode(e.target.value)}
					/>
					<label>Payment Method</label>
					<input type='text' placeholder='cash on delivery' disabled />
					<div
						className='login-button'
						onClick={() => (!orderLoading ? setSubmit(true) : null)}>
						<p>{orderLoading ? 'loading...' : 'Confirm'}</p>
					</div>
					{error && <p style={{ color: 'crimson' }}>{errorMsg}</p>}
				</div>
			</div>
		</Page>
	);
};

export default checkout;
