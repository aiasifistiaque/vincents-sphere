import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sizes } from '../constants';

const ProductCard = ({ product }) => {
	return (
		<Link href={`/product/${product._id}`}>
			<div className='page-section-card'>
				<Image
					src={product.image}
					alt={product.name}
					width={300}
					height={300}
					className='v-image'
				/>
				<h6>{product.name}</h6>
				<h6 style={{ fontSize: 16 }}>{product.subCategory}</h6>
				<p>{product.size}</p>
				<p>Tk. {product.price}</p>
			</div>
		</Link>
	);
};

export default ProductCard;
