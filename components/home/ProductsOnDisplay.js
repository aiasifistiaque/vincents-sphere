import React from 'react';
import Image from 'next/image';
import CardIconSection from '../product/CardIconSection';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ProductWrapper from '../product/ProductWrapper';
import CardImageWrapper from '../buttons/CardImageWrapper';

const ProductsOnDisplay = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card'>
			<Link href={`/product/${product._id}`} passHref>
				<ProductWrapper>
					<div>
						<CardImageWrapper>
							<Image
								unoptimized={true}
								src={product.image}
								alt={product.name}
								width={400}
								height={400}
								className='v-image'
							/>
						</CardImageWrapper>

						<div className='section-card-text'>
							<p className='section-sub-category'>{product.subCategory}</p>

							<h6>
								{product.name.length > 25
									? `${product.name.substring(0, 25)}...`
									: product.name}
							</h6>
							<h6 className='section-size-text'>{product.size}</h6>
						</div>
					</div>
				</ProductWrapper>
			</Link>
			<CardIconSection product={product} />
		</div>
	);
};

export default ProductsOnDisplay;
