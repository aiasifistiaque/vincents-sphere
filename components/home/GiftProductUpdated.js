import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ProductWrapper from '../product/ProductWrapper';

const GiftProductUpdated = ({ product }) => {
	const router = useRouter();
	return (
		<div
			className='new-gift-card'
			style={{
				backgroundImage: `url('${product.image}')`,
			}}>
			<Link href={`/giftbox?image=${product.image}`} passHref>
				<ProductWrapper>
					<div className='new-gift-card-text'>
						<h2>{product.name} Gift Box</h2>
					</div>
				</ProductWrapper>
			</Link>
		</div>
	);
};

export default GiftProductUpdated;
