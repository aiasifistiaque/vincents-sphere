import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GiftProduct = ({ product }) => {
	return (
		<div className='section-card'>
			<Link href={`/giftbox`}>
				<div style={{ cursor: 'pointer' }}>
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
			</Link>
		</div>
	);
};

export default GiftProduct;
