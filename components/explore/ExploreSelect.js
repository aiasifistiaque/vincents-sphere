import React from 'react';

const ExploreSelect = ({ sort, onChange }) => {
	return (
		<select className='custom-select' value={sort} onChange={e => onChange(e)}>
			<option value='newest' className='optn'>
				Newest
			</option>
			<option value='oldest' className='optn'>
				Oldest
			</option>
			<option value='priceUp' className='optn'>
				Price: Low to High
			</option>
			<option value='priceDown' className='optn'>
				Price: High to Low
			</option>
			<option value='nameAsc' className='optn'>
				Name: A-Z
			</option>
			<option value='nameDec' className='optn'>
				Name: Z-A
			</option>
		</select>
	);
};

export default ExploreSelect;
