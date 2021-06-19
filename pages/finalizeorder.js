import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import PageContainer from '../components/buttons/PageContainer';
import CartItems from '../components/cart/CartItems';
import PlaceOrder from '../components/cart/PlaceOrder';
import ShippingDetails from '../components/cart/ShippingDetails';
import ShadowContainerVertical from '../components/buttons/ShadowContainerVertical';
import useAddNewOrder from '../hooks/useAddNewOrder';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import { useRouter } from 'next/router';
import HeadingText from '../components/texts/HeadingText';

const finalizeorder = () => {
	const [shipping, setShipping] = useState({});
	const router = useRouter();
	const [submit, setSubmit] = useState(false);
	const { loading, isLoggedIn } = useIsLoggedIn();
	const [orderLoad, setOrderLoad] = useState(false);

	const { id, orderLoading, success, error, errorMsg } = useAddNewOrder(
		submit,
		shipping,
		'cash'
	);

	useEffect(() => {
		const address = JSON.parse(localStorage.getItem('vincentshipping'));
		setShipping(address);
	}, []);

	useEffect(() => {
		if (!isLoggedIn && !loading) Router.push('/login?page=cart');
	}, [loading]);

	useEffect(() => {
		if (!orderLoading) setSubmit(false);
		if (success) {
			router.replace(`/order/${id}?status=new`);
		} else if (error) {
			setOrderLoad(false);
			setSubmit(false);
		} else {
			setSubmit(false);
		}
	}, [orderLoading, success, error]);

	return (
		<Page>
			<PageContainer>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap-reverse',
						flex: 4,
						justifyContent: 'center',
					}}>
					<div style={{ flex: 1 }}>
						<h3>Order Summary</h3>
						<ShippingDetails shipping={shipping} />
						<ShadowContainerVertical>
							<HeadingText h={4} margin='0 0 1em 0'>
								Order Details
							</HeadingText>
							<CartItems checkout />
						</ShadowContainerVertical>
					</div>
					<div style={{ flex: 1 }}>
						<h3 style={{ margin: '0 4%' }}>Confirm Order</h3>
						<PlaceOrder
							onClick={() => {
								setSubmit(true);
								setOrderLoad(true);
							}}
							loading={orderLoad}
						/>
					</div>
				</div>
			</PageContainer>
		</Page>
	);
};

export default finalizeorder;
