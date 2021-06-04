import React from 'react';
import { Center } from '..';
import {
	addToCart,
	removeFromCart,
} from '../../store/actions/cartActions/cartActions';
import { useDispatch } from 'react-redux';

const CartQtyButton = ({ product, children }) => {
	const dispatch = useDispatch();

	const prod = {
		_id: product.product,
		name: product.name,
		image: product.image,
		price: product.itemPrice,
		countInStock: product.countInStock,
	};

	return (
		<div className='cart-qty-button'>
			{children > 1 && (
				<div
					className='v-plus-minus'
					onClick={() =>
						children > 1
							? dispatch(addToCart(prod, children - 1))
							: dispatch(removeFromCart(product.product))
					}>
					<p>-</p>
				</div>
			)}

			<Center>
				<p>{children}</p>
			</Center>
			<div
				className='v-plus-minus'
				onClick={() => dispatch(addToCart(prod, children + 1))}>
				<p>+</p>
			</div>
		</div>
	);
};

export default CartQtyButton;
