import React from 'react';

const ExploreSelect = ({ sort, onChange }) => {
	return (
		<select class='custom-select' value={sort} onChange={e => onChange(e)}>
			<option value='nameAsc' className='optn'>
				Sort: Name Asc
			</option>
			<option value='nameDec' className='optn'>
				Sort: Name Dsc
			</option>
			<option value='newest' className='optn'>
				Sort: Newest
			</option>
			<option value='oldest' className='optn'>
				Sort: Oldest
			</option>
		</select>
	);
};

export default ExploreSelect;
