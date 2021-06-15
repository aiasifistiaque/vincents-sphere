import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductWrapper from '../product/ProductWrapper';

const GiftProduct = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card'>
			<Link href={`/giftbox?image=${product.image}`} passHref>
				<ProductWrapper>
					<div>
						<Image
							src={product.image}
							alt={product.name}
							width={600}
							height={500}
							className='v-image'
						/>
						<div className='gift-card-text'>
							<h3>{product.name}</h3>
						</div>
					</div>
				</ProductWrapper>
			</Link>
		</div>
	);
};

export default GiftProduct;
