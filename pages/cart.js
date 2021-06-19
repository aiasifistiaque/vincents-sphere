import React from 'react';
import Page from '../components/Page';
import Checkout from '../components/cart/Checkout';
import CartItems from '../components/cart/CartItems';

function cart() {
	return (
		<Page title='Cart'>
			<div className='cart-page'>
				<div className='shopping-cart'>
					<h3>Shopping Cart</h3>
					<CartItems />
				</div>
				<Checkout />
			</div>
		</Page>
	);
}

export default cart;
