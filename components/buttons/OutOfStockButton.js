import React from 'react';

const OutOfStockButton = ({ children, color }) => {
	return (
		<div className='out-of-stock-button'>
			<span style={{ color: color || 'crimson' }}>{children}</span>
		</div>
	);
};

export default OutOfStockButton;
