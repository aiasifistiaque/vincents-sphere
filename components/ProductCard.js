import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sizes } from '../constants';

const ProductCard = ({ product }) => {
	return (
		<Link href={`/product/${product._id}`}>
			<div className='section-card'>
				<Image
					src={product.image}
					alt={product.name}
					width={sizes.displayCard.width}
					height={sizes.displayCard.height}
				/>
				<h6>{product.name}</h6>
				<p>{product.size}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
