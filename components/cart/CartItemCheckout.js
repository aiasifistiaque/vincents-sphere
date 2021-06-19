import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TextLinkWrapper from '../texts/TextLinkWrapper';

const CartItemCheckout = ({ product }) => {
	return (
		<div className='cart-item'>
			<div
				style={{
					minWidth: '50px',
					alignItems: 'center',
					margin: '0 5px',
				}}>
				<Image
					alt={product.name}
					src={product.image}
					height={80}
					width={100}
					className='v-image'
				/>
				<p></p>
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

export default CartItemCheckout;
