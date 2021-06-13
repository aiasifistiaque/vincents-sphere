import React from 'react';
import GiftProductUpdated from './GiftProductUpdated';

const products = [
	{
		name: "Women's Day Special",
		image: '/giftbox/Womens Day Special.jpg',
		to: '',
	},
	{
		name: "Valentine's Day Special",
		image: '/giftbox/Valentines Day Special.jpg',
		to: '',
	},
];

const GiftSectionUpdated = () => {
	return (
		<div className='home-sections' style={{ paddingBottom: '3%' }}>
			<div className='home-section-headers' style={{ padding: '0 4% 1em 4%' }}>
				<h3>Gift Box</h3>
				<h4 style={{ margin: 0, padding: 0 }}>
					Contact us for more customized Gift Box
				</h4>
			</div>
			<div className='new-gift-section'>
				{products.map((product, i) => (
					<GiftProductUpdated product={product} key={i} />
				))}
			</div>
			{/* <div style={{ padding: '2em 0' }}>
				<h4 style={{ margin: 0, padding: 0 }}>
					Contact us for more customized Gift Box
				</h4>
			</div> */}
		</div>
	);
};

export default GiftSectionUpdated;
