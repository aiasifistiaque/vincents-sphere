import React from 'react';
import DeleteFromCart from './DeleteFromCart';
import Image from 'next/image';

const CartItem = ({ product, index }) => {
	return (
		<div className='cart-item'>
			<Image
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

export default CartItem;
