import React from 'react';
import Link from 'next/link';

const CheckoutButton = () => {
	return (
		<Link href='/checkout'>
			<div className='checkout-button'>
				<p>Proceed to checkout</p>
			</div>
		</Link>
	);
};

export default CheckoutButton;
