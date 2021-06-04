import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions/cartActions';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeleteFromCart = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<div
			className='delete-from-cart'
			onClick={() => dispatch(removeFromCart(product.product))}>
			<FontAwesomeIcon icon={faTrashAlt} style={{ height: 20 }} />
		</div>
	);
};

export default DeleteFromCart;
