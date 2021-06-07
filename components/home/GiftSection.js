import React from 'react';
import GiftProduct from './GiftProduct';

const products = [
	{
		name: "Women's Day Special",
		image: "/giftbox/Women's Day Special.jpg",
		to: '',
	},
	{
		name: 'Valentines Day Special',
		image: '/giftbox/Valentines Day Special.jpg',
		to: '',
	},
];

const GiftSection = () => {
	return (
		<div className='home-sections'>
			<div className='home-section-headers'>
				<h3>Gift Box</h3>
				<h4>Contact us for customized Gift Box</h4>
			</div>

			<div className='gift-section'>
				{products.map((product, i) => (
					<GiftProduct product={product} />
				))}
			</div>
		</div>
	);
};

export default GiftSection;
