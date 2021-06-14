import React from 'react';
import { Center } from '..';
import {
	addToCart,
	removeFromCart,
} from '../../store/actions/cartActions/cartActions';
import { useDispatch } from 'react-redux';

const ProdQtyButton = ({ children, product }) => {
	const dispatch = useDispatch();

	return (
		<div className='prod-qty-button'>
			<div
				className='v-plus-minus'
				onClick={() =>
					children > 1
						? dispatch(addToCart(product, children - 1))
						: dispatch(removeFromCart(product._id))
				}>
				<p>-</p>
			</div>
			<Center>
				<p>{children}</p>
			</Center>

			<div
				className={
					children >= product.countInStock
						? 'v-plus-minus-disabled'
						: 'v-plus-minus'
				}
				onClick={() => {
					children < product.countInStock &&
						dispatch(addToCart(product, children + 1));
				}}>
				<p>+</p>
			</div>
		</div>
	);
};

export default ProdQtyButton;
