import React from 'react';
import GiftProduct from './GiftProduct';
import { giftHomeData } from '../../data/giftData';

const GiftSection = () => {
	return (
		<div className='home-sections' style={{ paddingBottom: '4%' }}>
			<div className='home-section-headers'>
				<h3>Gift Box</h3>
				<h4>Contact us for customized Gift Box</h4>
			</div>

			<div className='gift-section'>
				{giftHomeData.map((product, i) => (
					<GiftProduct product={product} key={i} />
				))}
			</div>
		</div>
	);
};

export default GiftSection;
