import React from 'react';
import GiftProductUpdated from './GiftProductUpdated';
import { giftHomeData } from '../../data/giftData';

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
				{giftHomeData.map((product, i) => (
					<GiftProductUpdated product={product} key={i} />
				))}
			</div>
		</div>
	);
};

export default GiftSectionUpdated;
