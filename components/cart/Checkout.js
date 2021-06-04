import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CheckoutButton from './CheckoutButton';
import ContinueShoppingButton from './ContinueShoppingButton';

function Checkout() {
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
		<div className='checkout-form'>
			<h5>Subtotal {length} Items</h5>
			<p>Total price: Tk. {totalPrice}</p>
			{cartItems.length > 0 && <CheckoutButton />}
			<ContinueShoppingButton />
		</div>
	);
}

export default Checkout;
