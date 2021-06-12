import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardIconSection from '../product/CardIconSection';
import { useRouter } from 'next/router';

const CatProductsOnDIsplay = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card' style={{ marginLeft: 0 }}>
			<div
				style={{ cursor: 'pointer' }}
				onClick={() => router.push(`/product/${product._id}`)}>
				<Image
					src={product.image || '/hero.jpg'}
					alt={product.name}
					width={400}
					height={350}
					className='v-image'
				/>
				<div className='section-card-text'>
					<p className='section-sub-category'>{product.subCategory}</p>
					<h6>{product.name}</h6>
					<h6 className='section-size-text'>{product.size}</h6>
					<h6 className='card-price'>৳{product.price}</h6>
				</div>
			</div>

			<CardIconSection product={product} />
		</div>
	);
};

export default CatProductsOnDIsplay;
