import React from 'react';
import Image from 'next/image';
import CardIconSection from '../product/CardIconSection';
import { useRouter } from 'next/router';

const RelatedProductsOnDisplay = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card' style={{ minWidth: 350 }}>
			<div
				onClick={() => router.push(`/product/${product._id}`)}
				style={{
					cursor: 'pointer',
				}}>
				<Image
					unoptimized={true}
					src={product.image}
					alt={product.name}
					width={200}
					height={200}
					className='v-image'
				/>
				<div className='section-card-text'>
					<p className='section-sub-category'>{product.subCategory}</p>
					<h6>{product.name}</h6>
					<h6 className='section-size-text'>{product.size}</h6>
				</div>
			</div>
			<CardIconSection product={product} />
		</div>
	);
};

export default RelatedProductsOnDisplay;
