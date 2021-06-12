import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GiftProduct = ({ product }) => {
	const router = useRouter();
	return (
		<div className='section-card'>
			<div
				style={{ cursor: 'pointer' }}
				onClick={() => router.push('/giftbox')}>
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
		</div>
	);
};

export default GiftProduct;
