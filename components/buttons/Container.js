import React from 'react';

const Container = ({ children, center, right, margin, padding, bg, left }) => {
	const pos = right ? 'flex-end' : left ? 'flex-start' : 'center';

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: pos,
				margin: margin || 0,
				padding: padding || 0,
				backgroundColor: bg || 'transparent',
			}}>
			{children}
		</div>
	);
};

export default Container;
