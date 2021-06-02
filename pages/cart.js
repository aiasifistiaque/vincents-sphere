import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../components/Page';
import Checkout from '../components/cart/Checkout';
import CartItem from '../components/cart/CartItem';

function cart() {
	const { cartItems } = useSelector(state => state.cart);

	return (
		<Page>
			<div className='cart-page'>
				<div className='shopping-cart'>
					<h3>Shopping Cart</h3>
					{cartItems.length == 0 ? (
						<div>
							<h3>Cart is empty</h3>
						</div>
					) : (
						cartItems.map((item, i) => (
							<CartItem product={item} key={i} index={i} />
						))
					)}
				</div>
				<Checkout />
			</div>
		</Page>
	);
}

export default cart;
