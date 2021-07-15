import React from 'react';
import DeleteFromCart from './DeleteFromCart';
import Image from 'next/image';
import CartQtyButton from './CartQtyButton';
import Link from 'next/link';
import TextLinkWrapper from '../texts/TextLinkWrapper';

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
					unoptimized={true}
					alt={product.name}
					src={product.image}
					height={60}
					width={80}
					className='v-image'
				/>
			</div>

			<Containers flex={2}>
				<Link href={`/product/${product.product}`} passHref>
					<TextLinkWrapper>
						<h6>{product.name}</h6>
					</TextLinkWrapper>
				</Link>
			</Containers>
			<Containers flex={2}>
				<p>
					৳{product.price} x {product.qty}
				</p>
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
