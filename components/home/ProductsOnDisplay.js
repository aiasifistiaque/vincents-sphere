import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardIconSection from '../product/CardIconSection';

const ProductsOnDisplay = ({ product }) => {
	return (
		<div className='section-card'>
			<Link href={`/product/${product._id}`}>
				<div
					style={{
						cursor: 'pointer',
					}}>
					<Image
						src={product.image}
						alt={product.name}
						width={400}
						height={400}
					/>
					<div className='section-card-text'>
						<p className='section-sub-category'>{product.subCategory}</p>
						<h6>{product.name}</h6>
						<h6 className='section-size-text'>{product.size}</h6>
					</div>
				</div>
			</Link>
			<CardIconSection product={product} />
		</div>
	);
};

export default ProductsOnDisplay;
