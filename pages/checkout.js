import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import Loading from '../components/Loading';
import { useRouter } from 'next/router';
import useAddNewOrder from '../hooks/useAddNewOrder';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/actions/cartActions/cartActions';
import ShippingForm from '../components/cart/ShippingForm';
import PageNotFound from '../components/error/PageNotFound';

const checkout = () => {
	const dispatch = useDispatch();
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [city, setCity] = useState('');
	const [postCode, setPostCode] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('cash');
	const [submit, setSubmit] = useState(false);
	const router = useRouter();
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	const [orderLoading, setOrderLoading] = useState(false);

	const { loading, isLoggedIn } = useIsLoggedIn();

	const submitPressed = () => {
		setOrderLoading(true);
		if (address.length < 1) {
			setError(true);
			setErrorMsg('Address is required');
			setOrderLoading(false);
		} else if (city.length < 1) {
			setError(true);
			setErrorMsg('City is required');
			setOrderLoading(false);
		} else if (postCode.length < 4) {
			setError(true);
			setErrorMsg('Wrong Postcode');
		} else if (phone.length < 7) {
			setError(true);
			setErrorMsg('Please provide a valid phone number');
			setOrderLoading(false);
		} else {
			localStorage.setItem(
				'vincentshipping',
				JSON.stringify({
					address: address,
					city: city,
					postalCode: postCode,
					phone: phone,
				})
			);
			router.replace('/finalizeorder');
			//setOrderLoading(false);
		}
	};

	useEffect(() => {
		if (!isLoggedIn && !loading) router.push('/login?page=cart');
	}, [loading]);

	if (!isLoggedIn) {
		router.push('/login?page=cart');
		return <Loading />;
	}

	if (loading) return <Loading />;

	return (
		<Page title='Checkout'>
			<div className='checkout-page'>
				<ShippingForm
					address={address}
					setAddress={e => setAddress(e)}
					city={city}
					setCity={e => setCity(e)}
					phone={phone}
					setPhone={e => setPhone(e)}
					postCode={postCode}
					setPostCode={e => setPostCode(e)}
					error={error}
					errorMsg={errorMsg}
					orderLoading={orderLoading}
					submit={submitPressed}
				/>
			</div>
		</Page>
	);
};

export default checkout;
