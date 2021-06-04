import React from 'react';
import Link from 'next/link';

const CheckoutButton = () => {
	return (
		<Link href='/checkout'>
			<div className='checkout-button'>
				<p>Checkout</p>
			</div>
		</Link>
	);
};

export default CheckoutButton;
