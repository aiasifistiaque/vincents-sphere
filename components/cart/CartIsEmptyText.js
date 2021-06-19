import React from 'react';
import HeadingText from '../texts/HeadingText';

const CartIsEmptyText = () => {
	return (
		<div className='cart-item'>
			<HeadingText h={5} color='crimson'>
				Your Cart is Empty!
			</HeadingText>
		</div>
	);
};

export default CartIsEmptyText;
