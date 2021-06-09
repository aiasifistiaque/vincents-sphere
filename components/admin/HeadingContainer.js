import React from 'react';

const HeadingContainer = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				margin: '0 1em',
				justifyContent: 'space-between',
				flexWrap: 'wrap',
			}}>
			{children}
		</div>
	);
};

export default HeadingContainer;
