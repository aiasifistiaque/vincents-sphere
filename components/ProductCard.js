import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductCard = ({ product }) => {
	const router = useRouter();
	return (
		<div
			className='page-section-card'
			onClick={() => router.push(`/product/${product._id}`)}>
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
			<p>৳ {product.price}</p>
		</div>
	);
};

export default ProductCard;
