import React, { useState } from 'react';

const sortItems = [
	'order placed',
	'confirmed',
	'paid',
	'ready for shipping',
	'shipped',
	'received',
	'completed',
	'archived',
];

const OrderStatusSelect = ({ sortValue, setSortValue }) => {
	const [val, setVal] = useState(sortValue);
	return (
		<select
			className='order-select'
			value={val}
			onChange={e => {
				setVal(e.target.value);
				setSortValue(e.target.value);
			}}>
			{sortItems.map((option, i) => (
				<option value={option} key={i}>
					{option}
				</option>
			))}
		</select>
	);
};

export default OrderStatusSelect;
