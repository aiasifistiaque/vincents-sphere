import React, { useState } from 'react';

const sortItems = [
	'Order Placed',
	'confirmed',
	'ready for shipping',
	'shipped',
	'completed',
	'archived',
	'cancelled',
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
