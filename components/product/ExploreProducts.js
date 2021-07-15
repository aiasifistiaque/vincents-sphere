import React from 'react';
import Image from 'next/image';
import CardIconSection from '../product/CardIconSection';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ProductWrapper from './ProductWrapper';

const ExploreProducts = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card explore-card' style={{ marginLeft: 0 }}>
			<Link href={`/product/${product._id}`} passHref>
				<ProductWrapper>
					<Image
						unoptimized={true}
						src={product.image || '/hero.jpg'}
						alt={product.name}
						width={300}
						height={250}
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

export default ExploreProducts;
