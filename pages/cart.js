import React from 'react';

import { useSelector } from 'react-redux';
import Page from '../components/Page';
import Link from 'next/link';
import useGetCart from '../hooks/useGetCart';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions/cartActions';

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

function Checkout() {
	const { totalPrice, length } = useGetCart();

	return (
		<div className='checkout-form'>
			<h5>Subtotal {length} Items</h5>

			<p>Total price: Tk. {totalPrice}</p>
			<Link href='/checkout'>
				<div className='checkout-button'>
					<p>Proceed to checkout</p>
				</div>
			</Link>
		</div>
	);
}

const CartItem = ({ product, index }) => {
	return (
		<div className='cart-item'>
			<img
				src={product.image}
				height={100}
				width={100}
				style={{ objectFit: 'contain' }}
			/>
			<h3>{product.name}</h3>
			<p>Tk.{product.price}</p>
			<DeleteFromCart product={product} index={index} />
		</div>
	);
};

const DeleteFromCart = ({ product, index }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='delete-from-cart'
			onClick={() => dispatch(removeFromCart(product.product))}>
			<p>Delete</p>
		</div>
	);
};

export default cart;
