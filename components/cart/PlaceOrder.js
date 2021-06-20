import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LongButton } from '..';
import ShadowContainerVertical from '../buttons/ShadowContainerVertical';
import HeadingText from '../texts/HeadingText';
import { general } from '../../constants';
import PriceTable from '../texts/PriceTable';

function PlaceOrder({ onClick, loading }) {
	const { cartItems } = useSelector(state => state.cart);
	const [totalPrice, setTotalPrice] = useState(0);
	const [length, setLength] = useState(0);

	useEffect(() => {
		let total = 0;
		let len = 0;
		cartItems.map(x => (total += x.price));
		setTotalPrice(total);
		cartItems.map(x => (len += x.qty));
		setLength(len);
	}, [cartItems]);

	return (
		<div className='checkout-form' style={{ padding: '25px 50px' }}>
			<h4>Order Summary</h4>
			<h6>Total {length} Items</h6>

			<PriceTable title='Price' margin='10px 0 10px 0'>
				{totalPrice}
			</PriceTable>
			<PriceTable title='Shipping'>0</PriceTable>
			<hr />
			<PriceTable title='Total' margin='0 0 20px 0'>
				{totalPrice}
			</PriceTable>

			{cartItems.length > 0 && (
				<LongButton onClick={!loading && onClick}>
					{loading ? 'loading...' : 'Place Order'}
				</LongButton>
			)}
		</div>
	);
}

export default PlaceOrder;
