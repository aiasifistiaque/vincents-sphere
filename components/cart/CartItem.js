import React from 'react';
import DeleteFromCart from './DeleteFromCart';
import Image from 'next/image';
import CartQtyButton from './CartQtyButton';

const CartItem = ({ product, index }) => {
	return (
		<div className='cart-item'>
			<div
				style={{
					minWidth: '50px',
					alignItems: 'center',
					margin: '0 5px',
				}}>
				<Image
					src={product.image}
					height={80}
					width={100}
					style={{ objectFit: 'contain' }}
				/>
			</div>

			<Containers flex={2}>
				<h6>
					{product.name} x {product.qty}
				</h6>
			</Containers>
			<Containers flex={2}>
				<p>৳{product.price}</p>
			</Containers>
			<Containers flex={0}>
				<CartQtyButton product={product}>{product.qty}</CartQtyButton>
			</Containers>
			<Containers flex={0}>
				<DeleteFromCart product={product} index={index} />
			</Containers>
		</div>
	);
};

const Containers = ({ flex, children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flex: flex,
				alignItems: 'center',
				justifyContent: 'flex-start',
				margin: 5,
			}}>
			{children}
		</div>
	);
};

export default CartItem;