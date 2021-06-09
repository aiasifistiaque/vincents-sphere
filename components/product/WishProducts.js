import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardIconSection from '../product/CardIconSection';
import useGetSingleProduct from '../../hooks/useGetSingleProduct';
import { Center } from '..';

const WishProducts = ({ id }) => {
	const { product, loading } = useGetSingleProduct(id);

	if (loading) return <Center>loading</Center>;

	return (
		<div className='section-card explore-card' style={{ marginLeft: 0 }}>
			<Link href={`/product/${product._id}`}>
				<div style={{ cursor: 'pointer' }}>
					<Image
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
				</div>
			</Link>
			<CardIconSection product={product} />
		</div>
	);
};

export default WishProducts;
