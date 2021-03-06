import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardIconSection from '../product/CardIconSection';
import ProductWrapper from '../product/ProductWrapper';

const CatProductsOnDIsplay = ({ product }) => {
	return (
		<div className='section-card' style={{ alignSelf: 'flex-start' }}>
			<Link href={`/product/${product._id}`} passHref>
				<ProductWrapper>
					<Image
						unoptimized={true}
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
				</ProductWrapper>
			</Link>
			<CardIconSection product={product} />
		</div>
	);
};

export default CatProductsOnDIsplay;
