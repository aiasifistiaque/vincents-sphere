import React from 'react';
import Link from 'next/link';

const ContinueShoppingButton = () => {
	return (
		<Link href='/'>
			<div className='checkout-button'>
				<p>Continue Shopping</p>
			</div>
		</Link>
	);
};

export default ContinueShoppingButton;
