import React from 'react';
import { useRouter } from 'next/router';

const GiftProductUpdated = ({ product }) => {
	const router = useRouter();
	return (
		<div
			className='new-gift-card'
			style={{
				backgroundImage: `url('${product.image}')`,
			}}>
			<div
				onClick={() => router.push('/giftbox')}
				className='new-gift-card-text'>
				<h2>{product.name} Gift Box</h2>
			</div>
		</div>
	);
};

export default GiftProductUpdated;
