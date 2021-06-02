import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions/cartActions';

const DeleteFromCart = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='delete-from-cart'
			onClick={() => dispatch(removeFromCart(product.product))}>
			<p>Delete</p>
		</div>
	);
};

export default DeleteFromCart;
